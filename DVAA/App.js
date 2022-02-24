import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container_main}>
      <View style= {{flex:1}}>
        <Text style ={styles.titleText}>Damn Vulnerable Android Application</Text>
        <StatusBar style="auto" />
      </View>
      <View style = {{flex: 2}}>
        <Text style={styles.normalText}>This is an intentionally vulnerable android application used to train developers and security professionals.</Text>
      </View>
      <View style = {{flex: 3}}>
        <Button onPress={() => Alert.alert('simple button')} title="Example Button" color="#841584" accessibilityLabel='Test accessiblity text'/>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container_main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 65 : 0
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
