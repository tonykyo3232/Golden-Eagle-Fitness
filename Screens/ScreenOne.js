/*
    Menu screen
*/
import React from 'react';
import {View, StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import {responsiveHeight,responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions";
const ScreenOne = props =>{

    return (
        <View style={styles.container}>
            <Text style= {styles.textStyle}>Choose your fitness program!</Text>
            <View style= {styles.buttonContainer}>
            <Button title="Select the workout program" onPress={() => props.navigation.navigate('ScreenTwo')}/>
            </View>
            <View>
            <Button title="Design your own workout program" onPress={() => props.navigation.navigate('ScreenThree')}/>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'teal',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer:{
        marginBottom:3
    },
    textStyle:{
        fontSize:responsiveFontSize(3) ,
        fontWeight: 'bold'
    }
});

export default ScreenOne;