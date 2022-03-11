import * as React from 'react';
import {View, ScrollView, StyleSheet, Text, Button, Alert} from 'react-native';

import * as Navigation from '@react-navigation/native';
import GlobalStyles from './stylesheets/styles';

export default function VulnScreen(navigation) {
    return(

      // Main Scroll View
      <ScrollView style = {GlobalStyles.scrollContainer}>

        {/* Vulnerability 1 (Broken Authentication) */}
        <View style = {GlobalStyles.vulnPick}>
          <Text style = {GlobalStyles.heading}>
          Broken Authentication
          </Text>

          <Text style = {GlobalStyles.body}>
          This vulnerabilty is all about issues that can be found
          within the Authentication like for example the login page.
          </Text>

          <Button
            title = 'Broken Authentication'
            onPress = {() => alert('Redirecting to Broken Authentication vulnerability')}
          />
        </View>


        {/* Vulnerability 2 (XSS) */}
        <View style = {GlobalStyles.vulnPick}>
          <Text style = {GlobalStyles.heading}>
          Cross-site Scripting (XSS)
          </Text>

          <Text style = {GlobalStyles.body}>
          This vulnerabilty is about injecting malicious JavaScript code into
          fields that do not have sufficient input validation
          </Text>

          <Button
            title = 'Cross-site Scripting'
            onPress = {() => alert('Redirecting to Cross-site Scripting vulnerability')}
          />
        </View>


        {/* Vulnerability 3 (SQL Injection) */}
        <View style = {GlobalStyles.vulnPick}>
          <Text style = {GlobalStyles.heading}>
          SQL Injection
          </Text>
          <Text style = {GlobalStyles.body}>
          This vulnerabilty is about trying to inject malicious
          code into a database query which then spits database records
          </Text>
          <Button
            title = 'SQL Injection'
            onPress = {() => alert('Redirecting to SQL Injection vulnerability')}
          />
        </View>
      </ScrollView>
      );
  };
