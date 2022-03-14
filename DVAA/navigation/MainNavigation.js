import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Button, Text, View, Alert } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNavigationContainerRef } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens

import HomeScreen from './screens/HomeScreen';
import VulnScreen from './screens/VulnerabilitiesScreen';
import DocScreen from './screens/DocumentationScreen';
import Vuln1Screen from './screens/Vuln1Screen';
import Vuln2Screen from './screens/Vuln2Screen';
import Vuln3Screen from './screens/Vuln3Screen';
import AboutUs from './screens/AboutUs';
import MoreInfo from './screens/MoreInfo';

// Screen names
const homeName = "Home";
const vulnName = "Vulnerabilities";
const docName = "Documentation";

const Tab = createBottomTabNavigator();
const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params);
    }
    else {
        navigationRef.current.getRootState()
    }
  }

export default function MainContainer(){
    return(
        <NavigationContainer ref = {navigationRef}>
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
                        iconName = focused ? 'terminal' : 'terminal';
                    }
                    else if (rn === docName) {
                        iconName = focused ? 'ios-file-tray-full-sharp' : 'ios-file-tray-full-sharp';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}

            tabBarOptions={{
                activeTintColor: 'orange',
                inactiveTintColor: 'grey',
                labelStyle: {paddingBottom: 10, fontSize: 10},
                style: {padding: 10, height: 70}
            }}
            >
            {/*Visible tab Screens*/}
            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={vulnName} component={VulnScreen}/>
            <Tab.Screen name={docName} component={DocScreen}/>



            <Tab.Screen  name = 'Vulnerability1' component = {Vuln1Screen} options={{
            tabBarButton: () => null,
            tabBarVisible: false,
            }} />
            <Tab.Screen  name = 'Vulnerability2' component = {Vuln2Screen} options={{
            tabBarButton: () => null,
            tabBarVisible: false,
            }} />
            <Tab.Screen  name = 'Vulnerability3' component = {Vuln3Screen} options={{
            tabBarButton: () => null,
            tabBarVisible: false,
            }} />
            <Tab.Screen  name = 'About Us' component = {AboutUs} options={{
            tabBarButton: () => null,
            tabBarVisible: false,
            }} />
            <Tab.Screen  name = 'More Info' component = {MoreInfo} options={{
            tabBarButton: () => null,
            tabBarVisible: false,
            }} />

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
