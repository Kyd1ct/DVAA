import * as React from 'react';
import {View, ScrollView, StyleSheet, Text, Button, Alert} from 'react-native';

import * as Navigation from '@react-navigation/native';
import GlobalStyles from './stylesheets/styles';



export default function VulnScreen({navigation}) {
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
          <View style = {{ marginTop: 10, marginHorizontal: '25%'}}>
            <Button
              title = 'Broken Authentication'
              onPress = {() => navigation.navigate('Vulnerability1')}
            />
          </View>
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

          <View style = {{ marginTop: 10, marginHorizontal: '25%'}}>
            <Button
              title = 'Cross-site Scripting'
              onPress = {() => navigation.navigate('Vulnerability2')}
            />
          </View>
        </View>


        {/* Vulnerability 3 (SQL Injection) */}
        <View style = {GlobalStyles.vulnPick}>
          <Text style = {GlobalStyles.heading}>
          WOW an API?
          </Text>
          <Text style = {GlobalStyles.body}>
          WOW an API will introduce you to a data leakage vulnerability
          and the ease of reverse engineering React Native applications without
          appropriate countermeasures
          </Text>
          <View style = {{ marginTop: 10, marginHorizontal: '25%'}}>
            <Button
              title = 'Data Leakage'
              onPress = {() => navigation.navigate('Vulnerability3')}
            />
          </View>
        </View>
      </ScrollView>
      );
  };
