/*
    Design Workout screen - part 2
*/
import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, TextInput , Text, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

// create DismissKeyboard so user can click anywhere to dismiss the keyboard
const DismissKeyboard = ({ children }) =>(
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
	  {children}
	</TouchableWithoutFeedback>
  );

const Step1 = props =>{

  return (
    <DismissKeyboard>
      <SafeAreaView style={ {flex: 1}}>
        <View style={styles.container}>
            <Text style= {styles.textStyle}>Next Step:</Text>
            <Text>Name: {props.route.params.workout_name}</Text>
            <Text>Link: {props.route.params.link}</Text>
            <Text>Number of Steps: {props.route.params.number}</Text>
          </View>
        </SafeAreaView>
      </DismissKeyboard>
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

export default Step1;