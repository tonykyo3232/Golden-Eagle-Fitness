/*
    BMI Calculation Page
*/
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, SafeAreaView, TextInput, Text, Button, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import {useSelector,useDispatch} from 'react-redux'
import {toggleFavorite} from '../../store/actions/actionTypes';

// create DismissKeyboard so user can click anywhere to dismiss the keyboard
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const ProgBMICal = props => {

  const [weight, setWeight] = useState('');
  const [feet, setFeet] = useState('');
  const [inch, setInch] = useState('');
  return (
    <DismissKeyboard>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Find out your BMI</Text>
          <TextInput
            style={{ height: 40 }}
            placeholder="Enter the weight(lbs)"
            keyboardType='numeric'
            onChangeText={weight => setWeight(weight)}
            defaultValue={weight}
          />
          <TextInput
            style={{ height: 40 }}
            placeholder="Enter feet"
            keyboardType='numeric'
            onChangeText={feet => setFeet(feet)}
            defaultValue={feet}
          />
          <TextInput
            style={{ height: 40 }}
            placeholder="Enter inches"
            keyboardType='numeric'
            onChangeText={inch => setInch(inch)}
            defaultValue={inch}
          />

          <TouchableOpacity style={styles.buttonStyle} onPress={() => props.navigation.navigate('BMIResult', { weight: weight, feet: feet, inch: inch })} >
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#385057',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginBottom: 3
  },
  textStyle: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color:'white'
  },
  buttonContainer: {
    borderRadius: responsiveFontSize(2),
    backgroundColor: '#f4b71e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: responsiveFontSize(1),
  },
  buttonText: {
    fontSize: responsiveFontSize(2)
  },
  button: {
    marginTop: responsiveHeight(5),
  }
});

export default ProgBMICal;