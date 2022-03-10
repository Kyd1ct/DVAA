import * as React from 'react';
import {View, ScrollView, StyleSheet, Text , Button, Alert} from 'react-native';

import * as Navigation from '@react-navigation/native';
import GlobalStyles from './stylesheets/styles';

export default function VulnScreen(navigation) {
    return(

      // Main View
      <View style={GlobalStyles.vulnContainer}>

        // Vulnerability 1 (BROKEN AUTHENTICATION)
        //
        <View style={GlobalStyles.vulnPick}>
          <Text style = {GlobalStyles.heading}>
          Broken Authentication
          </Text>
          <Text style = {GlobalStyles.body}>
          This vulnerabilty is all about issues that can be found
          within the Authentication like for example the login page.
          </Text>
          <Button
            title = "Broken Authentication"
            onPress = {() => alert('Redirecting to Broken Authentication vulnerability')}
          />
        </View>

        // Vulnerability 2 (REFLECTED XSS)
        <View style={GlobalStyles.vulnPick}>
          <Text style={GlobalStyles.heading}>
          Reflected XSS
          </Text>
        </View>

        // Vulnerability 3 (SQL INJECTION)
        <View style={GlobalStyles.vulnPick}>
          <Text style={GlobalStyles.heading}>
          SQL Injection
          </Text>
        </View>
      </View>
    );

}
