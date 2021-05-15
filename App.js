import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Menu from './Screens/Menu';
import ProgSelect from './Screens/Program/ProgSelect';
import ProgBMICal from './Screens/BMI_Calculation/ProgBMICal';
import ProgReview from './Screens/Program/ProgReview';
import ProgTimer from './Screens/Program/ProgTimer';
import ProgVideo from './Screens/Program/ProgVideo';
import BMIResult from './Screens/BMI_Calculation/BMIResult';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {combineReducers, createStore} from 'redux'
import workoutReducer from './store/reducers/workoutsReducer';
import {Provider} from 'react-redux'
const rootReducer= combineReducers({
  workouts:workoutReducer
});
const store = createStore(rootReducer);

const Stack = createStackNavigator();

const FitnessStack = () =>{
  return (
    <Provider store={store}>
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#f4b71e'
      }
    }}>
    
    <Stack.Screen name = "Menu" component={Menu} options={{
      title: 'Golden Eagle Fitness',
    }}/>
    <Stack.Screen name = "ProgSelect" component={ProgSelect} options={{
      title: 'Golden Eagle Fitness',
    }}/>
    <Stack.Screen name = "ProgBMICal" component={ProgBMICal} options={{
      title: 'Golden Eagle Fitness',
    }}/>
    <Stack.Screen name = "ProgReview" component={ProgReview} options={{
      title: 'Golden Eagle Fitness',
    }}/>
    <Stack.Screen name = "ProgTimer" component={ProgTimer} options={{
      title: 'Golden Eagle Fitness',
    }}/>
    <Stack.Screen name = "ProgVideo" component={ProgVideo} options={{
      title: 'Golden Eagle Fitness',
    }}/>
    <Stack.Screen name = "BMIResult" component={BMIResult} options={{
      title: 'Golden Eagle Fitness',
    }}/>
  </Stack.Navigator> 
  </Provider>
  );
};

const App = props => {
  return (
    <NavigationContainer>
      <FitnessStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
