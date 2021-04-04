/*
    Program Detail Screen
*/
import React , { useState, useEffect } from 'react';
import {View, StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

const ScreenFour = props =>{

    const [workouts, setWorkouts] = useState([]);
    useEffect(() => {

        const getWorkouts = async () => {
            
            // fetch the data from the website
            const responseWorkout = await fetch('https://gef-db.herokuapp.com/workout');
            
            // convert to Json format data
            const workouts = await responseWorkout.json();

            // save the workouts
            setWorkouts(workouts);
        };
  
        getWorkouts();
  
    }, []);

    return (
       <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.container}>
            <Text style= {styles.textStyle}>These are program details:</Text>
                {workouts.map((entry) => {
                    return(
                        // print out the prograns info on screen
                        <View style={styles.itemContainer}>
                            <Text>Name: {entry.name}</Text>
                            <Text>Label: {entry.label}</Text>
                            <Text>link: {entry.link}</Text>
                        </View>
                    )
                })}
            </View>
       </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
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