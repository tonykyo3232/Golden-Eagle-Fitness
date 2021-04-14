import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import ScreenOne from './Screens/ScreenOne';
import ScreenTwo from './Screens/ScreenTwo';
import ScreenThree from './Screens/ScreenThree';
import ScreenFour from './Screens/ScreenFour';
import ScreenFive from './Screens/ScreenFive';
import ScreenSix from './Screens/ScreenSix';
import Step1 from './Screens/Steps/Step1';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const FitnessStack = () =>{
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#f4b71e'
      }
    }}>
    
    <Stack.Screen name = "ScreenOne" component={ScreenOne} options={{
      title: 'Golden Eagle Fitness',
    }}/>
    <Stack.Screen name = "ScreenTwo" component={ScreenTwo} options={{
      title: 'Golden Eagle Fitness',
    }}/>
    <Stack.Screen name = "ScreenThree" component={ScreenThree} options={{
      title: 'Golden Eagle Fitness',
    }}/>
    <Stack.Screen name = "ScreenFour" component={ScreenFour} options={{
      title: 'Golden Eagle Fitness',
    }}/>
    <Stack.Screen name = "ScreenFive" component={ScreenFive} options={{
      title: 'Golden Eagle Fitness',
    }}/>
    <Stack.Screen name = "ScreenSix" component={ScreenSix} options={{
      title: 'Golden Eagle Fitness',
    }}/>
    <Stack.Screen name = "Step1" component={Step1} options={{
      title: 'Golden Eagle Fitness',
    }}/>
  </Stack.Navigator> 
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
