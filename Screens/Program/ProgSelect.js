/*
    Program Selection Screen
*/
import React, { useState, useEffect } from 'react'
import { Text, View, Button, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize, responsiveScreenHeight } from "react-native-responsive-dimensions";

// moved data to its own file for redux purposes.
//Still functions the same at the moment
import {Workout_Programs} from '../Program/workoutPrograms'
import {useSelector,useDispatch} from 'react-redux'


// 3rd party components form NPM (https://github.com/sauzy34/react-native-multi-selectbox)
import SelectBox from 'react-native-multi-selectbox'
import {toggleFavorite} from '../../store/actions/actionTypes';
// import { xorBy } from 'lodash'

// Options data must contain 'item' & 'id' keys

// const Workout_Programs = [
//   {
//     item: 'Testing',
//     id: 'W0',
//   },
//   {
//     item: '7 Minute Quick and Effective Workout',
//     id: 'W1',
//   },
//   {
//     item: '5 Minute Full Body Workout',
//     id: 'W2',
//   },
//   {
//     item: '15 Minute Beginner Workout for Fat Burning',
//     id: 'W3',
//   },
//   {
//     item: '5 Minute Home Workout',
//     id: 'W4',
//   },
//   {
//     item: '6 Pack Abs Workout',
//     id: 'W5',
//   },
//   {
//     item: '20 Minute Full Body Workout',
//     id: 'W6',
//   },
// ]

// const Body_Parts = [
//     {
//       item: 'Lose Fat',
//       id: 'B1',
//     },
//     {
//       item: 'Build Muscle',
//       id: 'B2',
//     },
//     {
//       item: 'Cardio Exercises',
//       id: 'B3',
//     },
//     {
//       item: 'Warm Up',
//       id: 'B4',
//     },
//   ]

function ProgramSelect(props) {
  const dispatch=useDispatch();

  const toggleFavorites= (id)=> dispatch({type: toggleFavorite, id })
  const [selectedLabel, setSelectedLabel] = useState({})
  const [selectedTeam, setSelectedTeam] = useState({})
  // const [selectedTeams, setSelectedTeams] = useState([])
  const workouts= useSelector(state=>state.workouts.workouts)
  // console.log('pause')
  // console.log(workouts)
  return (
    <View style={{ backgroundColor: '#385057', flex: 1 }}>
      <View style={{ margin: 30 }}>

        <View style={{ width: '100%', alignItems: 'center' }}>
          <Text style={{ fontSize: 30, paddingBottom: 20, color: 'white' }}>Select Workout Program</Text>
        </View>
        {/* <Text style={{ fontSize: 20, paddingBottom: 10 }}>Option1: Find the workout program</Text> */}
        <Text style={{ fontSize: 20, paddingBottom: 10, color: 'white' }}>Find the workout program</Text>
        <SelectBox
          label="Select single"
          options={workouts}
          value={selectedTeam}
          onChange={onChange()}
          hideInputFilter={false}
          labelStyle={{ color: 'white' }}
          optionsLabelStyle={{ color: 'white' }}
          inputFilterStyle={{ color: 'white' }}
          arrowIconColor='#f4b71e'
          searchIconColor='white'
          inputPlaceholder='Search'
        />

        {/* <View style={{ height: 40 }} /> */}

        {/* <Text style={{ fontSize: 20, paddingBottom: 10 }}>Option2: Choose the part of body you want to workout</Text>
      <SelectBox
        label="Select multiple"
        options={Body_Parts}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
      /> */}
        <View style={styles.button}>

          {/* <Button title="Select the workout program" onPress={() => props.navigation.navigate('ProgSelect')}/> */}
          <TouchableOpacity style={styles.buttonStyle} onPress={() => {
            props.navigation.navigate('ProgReview', { selectedLabel: selectedLabel })
            toggleFavorites(selectedLabel)
          }}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Next</Text>
            </View>
          </TouchableOpacity>

        </View>
        {/* <Button title="Next" onPress={() => props.navigation.navigate('ProgReview', { selectedLabel: selectedLabel })} /> */}
      </View>
    </View>
  )

  // function onMultiChange() {
  //   return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  // }

  function onChange() {
    return (val) => {
      setSelectedLabel(val.id)
      setSelectedTeam(val)
    }
  }
}
const styles = StyleSheet.create({
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

export default ProgramSelect;