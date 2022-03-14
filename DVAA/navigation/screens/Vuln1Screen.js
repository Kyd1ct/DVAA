import * as React from 'react';
import {ScrollView, View, Text , TextInput, Button} from 'react-native';

import GlobalStyles from './stylesheets/styles';

export default function Vuln1Screen(navigation) {
    return(
      <ScrollView style = {GlobalStyles.container}>
        <View style = {GlobalStyles.flex1}>
          <Text style = {GlobalStyles.title}>
            BR0K3N AUTH3NTICAT1ON
          </Text>
          <View style = {GlobalStyles.loginStylesheet}>
            <TextInput
              style={GlobalStyles.input}
              placeholder="Username"
            />
            <TextInput
              style={GlobalStyles.input}
              secureTextEntry={true}
              placeholder="Password"
            />
            <View style = {GlobalStyles.buttonView}>
              <Button
                title = 'Login'
              />
              <Button
                title = 'Register'
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
}
