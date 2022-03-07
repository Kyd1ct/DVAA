import * as React from 'react';
import {View, ScrollView, Text } from 'react-native';

import * as Navigation from '@react-navigation/native';

export default function VulnScreen(navigation) {
    return(

      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',

      }}>
        <View style={{height: 150, backgroundColor: 'gray' }}>
          <Text style={{color: 'white'}}>
          1st Vulnerablity
          </Text>
        </View>


        <View style={{height: 150, marginTop: 10, backgroundColor: 'gray'}}>
          <Text style={{color: 'white'}}>
          2nd Vulnerablity
          </Text>
        </View>

        <View style={{height: 150, marginTop: 10, backgroundColor: 'gray'}}>
          <Text style={{color: 'white'}}>
          3rd Vulnerablity
          </Text>
        </View>
      </View>
    );
}
