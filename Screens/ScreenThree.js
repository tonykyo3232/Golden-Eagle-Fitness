/*
    Design Workout Screen
*/
import React , {useState} from 'react';
import {View, StyleSheet, SafeAreaView, TextInput, Text, Button} from 'react-native';

// 3rd party components form NPM (https://github.com/samad324/react-native-animated-multistep)
import AnimatedMultistep from "react-native-animated-multistep";

import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";

const allSteps = [
    { name: "step 1", component: Step1 },
    { name: "step 2", component: Step2 }
];

export class ScreenThree extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {};
    }
  
    onNext = () => {
      console.log("Next");
    };
    onBack = () => {
      console.log("Back");
    };
  
    finish = state => {
      console.log("TCL: App -> state", state);
    };

    render(){
        return (
            <SafeAreaView style={styles.safeAreaView}>

                <View style={styles.headerContainer}>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>Design your fitness program!</Text>
                </View>

                <View style={styles.lowerContainer}>
                    <AnimatedMultistep
                        steps={allSteps}
                        onFinish={this.finish}
                        animate={true}
                        onBack={this.onBack}
                        onNext={this.onNext}
                    />
                </View>

            </SafeAreaView>
        );
    }  
}

const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: '#16a085',
      justifyContent: "flex-end",
      alignItems: "center"
    },
    headerContainer: {
      flex: 1,
      backgroundColor: 'yellow',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    lowerContainer: {
        flex: 2
    }
});

export default ScreenThree;