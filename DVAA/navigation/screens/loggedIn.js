import React, { useState, useEffect } from 'react';
import {ScrollView, View, Text , TextInput, Button, Alert, String} from 'react-native';
import Constants from "expo-constants";
import { Asset } from 'expo-asset';
import { Updates } from 'expo';
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import connect, {sql} from '@databases/expo';

import GlobalStyles from './stylesheets/styles';

const db = connect('DB');


export default function LoggedIn({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT Username FROM Users",
          [],
          (tx, results) => {
            var len = results.rows.lenght;
            if (len > 0) {
              var userName = results.rows.item(0).Username;
              setUsername(userName);
            }
          }
        )
      })
    }
    catch (error) {
      console.log(error);
    }
  }

  const back_to_login = () => {
    navigation.navigate('VulnScreen1');
  }

  return (
    <ScrollView style = {GlobalStyles.container}>
      <View style = {GlobalStyles.flex1}>
        <Text style = {GlobalStyles.title}>
          Welcome {username}
        </Text>
        <View style = {GlobalStyles.buttonView}>
          <Button
            title = 'Home Screen'
          />
          <Button
            title = 'Back to login'
            onPress = {back_to_login()}
          />

        </View>
      </View>
    </ScrollView>
  );
};
