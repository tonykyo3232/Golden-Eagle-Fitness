/*
    Program Detail Screen
*/
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";

const ProgReview = props => {

    const [workouts, setWorkouts] = useState([]);
    const [selectedLabel, setSelectedLabel] = useState({})
    const [link, setLink] = useState({})
    useEffect(() => {
        const getWorkouts = async () => {
            // fetch the data from the website
            var search = "https://gef-db.herokuapp.com/workout/" + props.route.params.selectedLabel;
            const responseWorkout = await fetch(search);

            // convert to Json format data
            const workouts = await responseWorkout.json();

            // save the workouts
            setWorkouts(workouts);

            // save the link
            workouts.map((item) => {
                setLink(item.link)
            })

            // save the workout label
            setSelectedLabel(props.route.params.selectedLabel);
        };

        getWorkouts();
    }, []);
    const renderItem = listItem => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.entryText}>Name: {listItem.item.name}</Text>
                <View style={{ marginBottom: 30 }}></View>
                {listItem.item.steps.map((step, index2) => {
                    return (
                        <View style={styles.itemContainer} key={index2}>
                            <Text style={styles.entryText}>Step {index2 + 1}: {step[0]}</Text>
                            <Text style={styles.entryText}>Duration: {step[1]} seconds</Text>
                        </View>
                    )
                }
                )}
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.safeAreaView}>

                <View style={styles.container}>
                    <View style={{ margin: responsiveFontSize(2) }}>
                        <Text style={styles.textStyle}>Program Preview:</Text>
                    </View>
                    <View style={styles.button}>

                        {/* <Button title="Select the workout program" onPress={() => props.navigation.navigate('ProgSelect')}/> */}
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => props.navigation.navigate('ProgTimer', { selectedLabel: selectedLabel })}>
                            <View style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Start</Text>
                            </View>
                        </TouchableOpacity>
                        {/* <Button title="Select the workout program" onPress={() => props.navigation.navigate('ProgSelect')}/> */}
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => props.navigation.navigate('ProgVideo', { link: link })}>
                            <View style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Original Video</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    
                    <FlatList
                        data={workouts}
                        renderItem={renderItem}
                    />

{/* 
                    {workouts.map((entry, index1) => {
                        return (
                            // print out the program info on screen
                            <View style={styles.itemContainer} key={index1}>
                                <Text style={styles.entryText}>Name: {entry.name}</Text>
                                <View style={{ marginBottom: 30 }}></View>
                                {entry.steps.map((step, index2) => {
                                    return (
                                        <View style={styles.itemContainer} key={index2}>
                                            <Text style={styles.entryText}>Step {index2 + 1}: {step[0]}</Text>
                                            <Text style={styles.entryText}>Duration: {step[1]} seconds</Text>
                                        </View>
                                    )
                                }
                                )}
                            </View>
                        )
                    })} */}
                </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    scrollView: {
        //marginHorizontal: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#385057',
        alignItems: 'center'
    },
    itemContainer: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    textStyle: {
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold'
    },
    buttonContainer: {
        borderRadius: responsiveFontSize(2),
        backgroundColor: '#f4b71e',
        justifyContent: 'center',
        alignItems: 'center',
        padding: responsiveFontSize(1),
        margin: responsiveFontSize(1)
    },
    buttonText: {
        fontSize: responsiveFontSize(2)
    },
    entryText: {
        fontSize: responsiveFontSize(2),
        color: 'white'
    }
});

export default ProgReview;