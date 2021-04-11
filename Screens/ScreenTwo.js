/*
    Program Selection Screen
*/
import React, { useState, useEffect } from 'react'
import { Text, View, Button, SafeAreaView} from 'react-native'

// 3rd party components form NPM (https://github.com/sauzy34/react-native-multi-selectbox)
import SelectBox from 'react-native-multi-selectbox'
// import { xorBy } from 'lodash'

// Options data must contain 'item' & 'id' keys

const Workout_Programs = [
  {
    item: '7 Minute Quick and Effective Workout',
    id: 'W1',
  },
  {
    item: '5 Minute Full Body Workout',
    id: 'W2',
  },
  {
    item: '15 Minute Beginner Workout for Fat Burning',
    id: 'W3',
  },
  {
    item: '5 Minute Home Workout',
    id: 'W4',
  },
]

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

function ScreenTwo(props) {
  
  const [selectedLabel, setSelectedLabel] = useState({})
  const [selectedTeam, setSelectedTeam] = useState({})
  // const [selectedTeams, setSelectedTeams] = useState([])

  return (
    <View style={{ margin: 30 }}>

      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, paddingBottom: 20 }}>Select Workout Program</Text>
      </View>

      {/* <Text style={{ fontSize: 20, paddingBottom: 10 }}>Option1: Find the workout program</Text> */}
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Find the workout program</Text>
      <SelectBox
        label="Select single"
        options={Workout_Programs}
        value={selectedTeam}
        onChange={onChange()}
        hideInputFilter={false}
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

      <Button title="Next" onPress={() => props.navigation.navigate('ScreenFour', {selectedLabel: selectedLabel})}/>

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

export default ScreenTwo;