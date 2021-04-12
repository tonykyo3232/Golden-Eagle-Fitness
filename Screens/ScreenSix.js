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
                <WebView source = { {url: props.route.params.link}} javaScriptEnabled={true}/>
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
});

export default ScreenSix;