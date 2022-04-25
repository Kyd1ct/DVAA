import * as React from 'react';
import {View, ScrollView, Text, Button, Linking} from 'react-native';

import * as Navigation from '@react-navigation/native';
import GlobalStyles from './stylesheets/styles';


export default function DocScreen(navigation) {

    url1 = ''
    url2 = ''
    url3 = 'https://drive.google.com/file/d/1Q6IVqhCVi9GbxPzv6p85xC4SbBNb70b2/view?usp=sharing'
    return(
    // Main Scroll View


    <ScrollView style = {GlobalStyles.scrollContainer}>

    {/* Vulnerability 1 (Broken Authentication) */}
    <View style = {GlobalStyles.vulnPick}>
      <Text style = {GlobalStyles.heading}>
      Broken Authentication
      </Text>

      <Text style = {GlobalStyles.body}>
      Here you can find the complete documentation for the
      broken authentication vulnerability.
      </Text>
      <View style = {{ marginTop: 10, marginHorizontal: '25%'}}>
        <Button
          title = 'Open'
          onPress = {() => Linking.openURL(url3).catch((err) => {console.log(err)})}
        />
      </View>
    </View>


    {/* Vulnerability 2 (XSS) */}
    <View style = {GlobalStyles.vulnPick}>
      <Text style = {GlobalStyles.heading}>
      Cross-site Scripting (XSS)
      </Text>

      <Text style = {GlobalStyles.body}>
      Here you can find the complete documentation for the
      Cross-site scripting vulnerability.
      </Text>

      <View style = {{ marginTop: 10, marginHorizontal: '25%'}}>
        <Button
          title = 'Open'
          onPress = {() => Linking.openURL(url3).catch((err) => {console.log(err)})}
        />
      </View>
    </View>


    {/* Vulnerability 3 (SQL Injection) */}
    <View style = {GlobalStyles.vulnPick}>
      <Text style = {GlobalStyles.heading}>
      WOW an API?
      </Text>
      <Text style = {GlobalStyles.body}>
      Here you can find the complete documentation for the
      data leak vulnerability.
      </Text>
      <View style = {{ marginTop: 10, marginHorizontal: '25%'}}>
        <Button
          title = 'Open'
          onPress = {() => Linking.openURL(url3).catch((err) => {console.log(err)})}
        />
      </View>
    </View>
  </ScrollView>
  );
}
