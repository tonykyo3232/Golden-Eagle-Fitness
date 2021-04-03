import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'

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

const Body_Parts = [
    {
      item: 'Lose Fat',
      id: 'B1',
    },
    {
      item: 'Build Muscle',
      id: 'B2',
    },
    {
      item: 'Cardio Exercises',
      id: 'B3',
    },
    {
      item: 'Warm Up',
      id: 'B4',
    },
  ]

function ScreenTwo() {
  
  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedTeams, setSelectedTeams] = useState([])

  const [workouts, setWorkouts] = useState('');

  useEffect(() => {

      const getWorkouts = async () => {

          const responseWorkout = await fetch('https://gef-db.herokuapp.com/workout');
          
          const workouts = await responseWorkout.json();
          
          // debug - this will print out all the workout programs in database
          // console.log(workouts) // debug
          
          // debug - this will print out each workout program's detail in a loop
          // workouts.map((entry) => {
          //   console.log("label: " + entry.label)
          //   console.log("name: " + entry.name)
          //   console.log("link: " + entry.link)
          //   console.log('---------------------')
          // })

          setWorkouts(workouts);

      };

      getWorkouts();

  }, []);

  return (
    <View style={{ margin: 30 }}>

      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, paddingBottom: 20 }}>Select Workout Program</Text>
      </View>

      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Option1: Find the workout program</Text>
      <SelectBox
        label="Select single"
        options={Workout_Programs}
        value={selectedTeam}
        onChange={onChange()}
        hideInputFilter={false}
      />

      <View style={{ height: 40 }} />
      
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Option2: Choose the part of body you want to workout</Text>
      <SelectBox
        label="Select multiple"
        options={Body_Parts}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
      />

    </View>
  )

  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  }

  function onChange() {
    return (val) => setSelectedTeam(val)
  }
}

export default ScreenTwo;