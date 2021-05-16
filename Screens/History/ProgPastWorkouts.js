/*
    Showed the workouts that user have selected
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

const ProgPastWorkouts = props => {
  const dispatch=useDispatch();
  const toggleFavorites= (id)=> dispatch({type: toggleFavorite, id })
  const favWorkouts= useSelector(state=>state.workouts.favWorkouts)

  const renderItem = listItem =>{
    return(
      <View style={{margin:responsiveHeight(2)}}>
        <Text style= {{fontSize:responsiveFontSize(2), color:'white'}}>{listItem.item.item}</Text>
      </View>
    )
  }
  return (
    <DismissKeyboard>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View>
            <Text style={{fontSize:responsiveFontSize(4), color: 'white'}}>Recent Workouts</Text>
          </View>
          <FlatList
          data={favWorkouts}
          renderItem={renderItem}
          />
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

export default ProgPastWorkouts;