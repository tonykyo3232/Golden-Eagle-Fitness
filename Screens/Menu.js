/*
    Menu screen
*/
import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Button, TouchableOpacity, Image } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize, responsiveScreenHeight } from "react-native-responsive-dimensions";


const Menu = props => {

    return (
        <View style={styles.container}>

            <View style={styles.headerStyle}>
                <Text style={styles.titleStyle}>Let's get some workout!</Text>
            </View>
            <View style={styles.buttons}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../images/mbj.jpg')}
                        style={styles.mbj}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    {/* <Button title="Select the workout program" onPress={() => props.navigation.navigate('ProgSelect')}/> */}
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => props.navigation.navigate('ProgSelect')}><Text style={styles.buttonText}>Select the workout program</Text></TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../images/hit.jpg')}
                        style={styles.mbj}
                    />
                </View>
                <View>
                    {/* <Button title="Design your own workout program" onPress={() => props.navigation.navigate('ProgDesign')}/> */}
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => props.navigation.navigate('ProgDesign')}><Text style={styles.buttonText}>Design your own workout program</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#385057',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    buttonContainer: {
        marginBottom: responsiveFontSize(1),
        //backgroundColor: 'green',
    },
    titleStyle: {
        fontSize: responsiveFontSize(4),
        fontWeight: 'bold',
    },
    buttonStyle: {
        borderRadius: responsiveFontSize(2),
        backgroundColor: '#f4b71e',
        justifyContent: 'center',
        alignItems: 'center',
        padding: responsiveFontSize(1),
    },
    headerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(5),
        marginBottom: responsiveHeight(3),
        //backgroundColor: "red"
    },
    buttons: {
        justifyContent: 'center',
        alignItems: 'center',
        //flex: 1,
        //backgroundColor: 'orange'
    },
    buttonText: {
        fontSize: responsiveFontSize(2)
    },
    mbj: {
        height: responsiveHeight(30),
        width: responsiveWidth(95),
        borderRadius: responsiveFontSize(2)
    },
    imageContainer:{
        marginBottom:responsiveHeight(2)
    }
});

export default Menu;