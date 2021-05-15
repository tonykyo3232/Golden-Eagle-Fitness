/*
    https://www.cdc.gov/nccdphp/dnpao/growthcharts/training/bmiage/page5_2.html
    BMI result page
    If your BMI is:
    below 18.5 – you're in the underweight range
    between 18.5 and 24.9 – you're in the healthy weight range
    between 25 and 29.9 – you're in the overweight range
    between 30 and 39.9 – you're in the obese range
*/
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, TextInput , Text, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

// create DismissKeyboard so user can click anywhere to dismiss the keyboard
const DismissKeyboard = ({ children }) =>(
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
	  {children}
	</TouchableWithoutFeedback>
  );

const BMIResult = props =>{

  const [status, setStatus] = useState('');

  useEffect(() => {
    const calBMI = () => {

      let weight = parseInt(props.route.params.weight);
      let feet = parseInt(props.route.params.feet);
      let inch = parseInt(props.route.params.inch);
      let feet_inch = feet + (inch / 12);

      // BMI calculation formula
      // Calculation: [weight (lb) / height (in) / height (in)] x 703
      let BMI = (weight / (feet_inch * feet_inch)) * 703;

      // debug
      console.log("BMI: " + BMI);

      // below 18.5 – you're in the underweight range
      if(BMI < 18.5){
        console.log("underweight");
        setStatus("underweight");
      }
      // between 18.5 and 24.9 – you're in the healthy weight range
      else if(18.5 < BMI && BMI < 24.9){
        console.log("healthy");
        setStatus("healthy");
      }
      // between 25 and 29.9 – you're in the overweight range
      else if(25 < BMI && BMI < 29.9){
        console.log("overweight");
        setStatus("overweight");
      }
      //between 30 and 39.9 – you're in the obese range
      else{
        console.log("obese");
        setStatus("obese");
      }
    }
    
    calBMI();
  }, []);

  return (
    <DismissKeyboard>
      <SafeAreaView style={ {flex: 1}}>
        <View style={styles.container}>
            <Text style= {styles.textStyle}>BMI Result:</Text>
            <Text>Weight: {props.route.params.weight}</Text>
            <Text>Feets: {props.route.params.feet}</Text>
            <Text>Inches: {props.route.params.inch}</Text>
            <Text>Your BMI condition is: {status}</Text>
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

export default BMIResult;