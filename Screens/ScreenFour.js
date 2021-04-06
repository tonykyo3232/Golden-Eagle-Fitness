/*
    Program Detail Screen
    Has warning message: "Warning: Each child in a list should have a unique "key" prop."
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
                    <Text style= {styles.textStyle}>These are program details:</Text>
                    <Button title="START" onPress={() => props.navigation.navigate('ScreenFive', {selectedLabel: selectedLabel})}/>
                    {workouts.map((entry) => {
                        return(
                            // print out the program info on screen
                            <View style={styles.itemContainer}>
                                <Text>Name: {entry.name}</Text>
                                <Text>Label: {entry.label}</Text>
                                <Text>link: {entry.link}</Text>
                                {entry.steps.map((step) => {
                                    return(
                                        <View>
                                            <Text>{step[0]}</Text>
                                            <Text>{step[1]}</Text>
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
        alignItems: 'center'
    },
    textStyle:{
        fontSize:responsiveFontSize(3) ,
        fontWeight: 'bold'
    }
});

export default ScreenFour;