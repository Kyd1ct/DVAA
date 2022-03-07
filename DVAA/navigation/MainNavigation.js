import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Button, Text, View, Alert } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens

import HomeScreen from './screens/HomeScreen';
import VulnScreen from './screens/VulnerabilitiesScreen';
import DocScreen from './screens/DocumentationScreen';
import Vuln1Screen from './screens/Vuln1Screen';
import Vuln2Screen from './screens/Vuln2Screen';
import Vuln3Screen from './screens/Vuln3Screen';

// Screen names
const homeName = "Home";
const vulnName = "Vulnerabilities";
const docName = "Documentation";
const vuln1 = "Vulnerablitie1";
const vuln2 = "Vulnerablitie2";
const vuln3 = "Vulnerablitie3";

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
        {/* <View style= {{flex:1}}>
        <Text style ={styles.titleText}>Damn Vulnerable Android Application</Text>
            <StatusBar style="auto" />
        </View>
        <View style = {{flex: 2}}>
            <Text style={styles.normalText}>This is an intentionally vulnerable android application used to train developers and security professionals.</Text>
        </View>
        <View style = {{flex: 3}}>
            <Button onPress={() => Alert.alert('simple button')} title="Example Button" color="#841584" accessibilityLabel='Test accessiblity text'/>
        </View> */}
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    }
                    else if (rn === vulnName) {
                        iconName = focused ? 'list' : 'list-outline';
                    }
                    else if (rn === docName) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}

            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'grey',
                labelStyle: {paddingBottom: 10, fontSize: 10},
                style: {padding: 10, height: 70}
            }}
            >

                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={vulnName} component={VulnScreen}/>
                <Tab.Screen name={docName} component={DocScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
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
