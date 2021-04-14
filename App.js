import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Menu from './Screens/Menu';
import ProgSelect from './Screens/Program/ProgSelect';
import ProgDesign from './Screens/Customization/ProgDesign';
import ProgReview from './Screens/Program/ProgReview';
import ProgTimer from './Screens/Program/ProgTimer';
import ProgVideo from './Screens/Program/ProgVideo';
import Step1 from './Screens/Customization/Step1';

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
    
    <Stack.Screen name = "Menu" component={Menu} options={{
      title: 'Golden Eagle Fitness',
    }}/>
    <Stack.Screen name = "ProgSelect" component={ProgSelect} options={{
      title: 'Golden Eagle Fitness',
    }}/>
    <Stack.Screen name = "ProgDesign" component={ProgDesign} options={{
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
