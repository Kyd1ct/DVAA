import * as React from 'react';
import {View, Text, StyleSheet, Button, Alert } from 'react-native';

export default function HomeScreen(navigation) {
    return(
    <View style = {{flex: 1, flexDirection: "column", paddingTop: 15}}>
        <View style = {{flex : 1}}>
        <Text style = {styles.titleText}>
                Damn Vulnerable Android Application
        </Text>
        </View>
        <View style = {{flex: 2}}>
            <Text style = {styles.normalText}>
                This is vulnerable Android application created to aid developers and security researchers in writing secure code and improving their pentesting abilities.
            </Text>
        </View>
        <View style = {{flex: 3, alignItems: "center", flexDirection: 'row'}}>
              <Button style = {{paddingLeft: 15, paddingRight: 15}} onPress={() => Alert.alert('About us')} title="About us" color="#841584" accessibilityLabel='Test accessiblity text'/>
              <Button style= {{paddingLeft: 15, paddingRight: 15}} onPress={() => Alert.alert('More Info')} title="More information" color="#841584" accessibilityLabel='Test accessiblity text'/>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container_main: {
      backgroundColor: '#fff',
      //paddingTop: Platform.OS === 'android' ? 65 : 0
    },
  
    titleText: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
  
    normalText: {
      textAlign: 'center',
      fontSize: 20,
    },
  
  
    button_allign: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }
  });