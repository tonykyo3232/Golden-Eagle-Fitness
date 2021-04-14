/*
    Design Workout screen  - part 1
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

const ScreenThree = props =>{

  const [workout_name, setName] = useState('');
  const [link, setLink] = useState('');
  const [number, setSteps] = useState('');

  return (
    <DismissKeyboard>
      <SafeAreaView style={ {flex: 1}}>
        <View style={styles.container}>
            <Text style= {styles.textStyle}>Design your fitness program!</Text>
            <TextInput
              style={{height: 40}}
              placeholder="Enter Workout Name"
              onChangeText={workout_name => setName(workout_name)}
              defaultValue={workout_name}
            />
            <TextInput
              style={{height: 40}}
              placeholder="Enter Video Link"
              onChangeText={link => setLink(link)}
              defaultValue={link}
            />
            <TextInput
              style={{height: 40}}
              placeholder="Steps in Total"
              onChangeText={number => setSteps(number)}
              defaultValue={number}
            />
            <Button title="NEXT" onPress={() => props.navigation.navigate('Step1', {workout_name: workout_name, link: link, number: number})}/>
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

export default ScreenThree;