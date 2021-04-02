/*
    Menu screen
*/
import React from 'react';
import {View, StyleSheet, SafeAreaView, Text, Button} from 'react-native';

const ScreenOne = props =>{

    return (
        <View style={styles.container}>
            <Text>Choose your fitness program!</Text>
            <Button title="Select the workout program" onPress={() => props.navigation.navigate('ScreenTwo')}/>
            <Button title="Design your own workout program" onPress={() => props.navigation.navigate('ScreenThree')}/>
        </View>
    );

};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'teal',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ScreenOne;