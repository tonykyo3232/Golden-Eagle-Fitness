/*
    Program Detail Screen
*/
import React , { useState, useEffect } from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView, Text, Button} from 'react-native';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

const ScreenFour = props =>{

    const [workouts, setWorkouts] = useState([]);
    const [selectedLabel, setSelectedLabel] = useState({})
    useEffect(() => {
        const getWorkouts = async () => {
            // fetch the data from the website
            var search = "https://gef-db.herokuapp.com/workout/" + props.route.params.selectedLabel;
            const responseWorkout = await fetch(search);

            // convert to Json format data
            const workouts = await responseWorkout.json();

            // save the workouts
            setWorkouts(workouts);
   
            // save the workout label
            setSelectedLabel(props.route.params.selectedLabel);
        };

        getWorkouts();
    }, []);

    return (
       <SafeAreaView style={styles.safeAreaView}>
           <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <Text style= {styles.textStyle}>Program Preview:</Text>
                    <Button title="START" onPress={() => props.navigation.navigate('ScreenFive', {selectedLabel: selectedLabel})}/>
                    {workouts.map((entry, index1) => {
                        return(
                            // print out the program info on screen
                            <View style={styles.itemContainer} key = {index1}>
                                <Text>Name: {entry.name}</Text>
                                <View style={{marginBottom: 15}}></View>
                                <Text>Link: {entry.link}</Text>
                                <View style={{marginBottom: 15}}></View>
                                {entry.steps.map((step, index2) => {
                                    return(
                                        <View style={styles.itemContainer} key = {index2}>
                                            <Text>Step {index2 + 1}: {step[0]}</Text>
                                            <Text>Duration: {step[1]} seconds</Text>
                                        </View>
                                    )}
                                )}
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
       </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    scrollView: {
        marginHorizontal: 20,
      },
    container:{
        flex: 1,
        backgroundColor: 'teal',
        alignItems: 'center'
    },
    itemContainer:{
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    textStyle:{
        fontSize:responsiveFontSize(3) ,
        fontWeight: 'bold'
    }
});

export default ScreenFour;