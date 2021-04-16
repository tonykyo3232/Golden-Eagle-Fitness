/*
    Display workout video
*/
import React , { useState, useEffect } from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView, Text, Button} from 'react-native';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
import { WebView } from 'react-native-webview';

const ScreenSix = props =>{
    return (
       <SafeAreaView style={styles.safeAreaView}>
           <ScrollView style={styles.scrollView}>
                <View style = {styles.container}>
                    <WebView source = {{ uri: props.route.params.link }}/>
                </View>
            </ScrollView>
       </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    scrollView: {
        marginHorizontal: 20,
      },
    container: {
        height: 345,
     }
});

export default ScreenSix;