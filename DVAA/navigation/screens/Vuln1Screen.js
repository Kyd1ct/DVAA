import React, { useState, useEffect } from 'react';
import {ScrollView, View, Text , TextInput, Button} from 'react-native';
import * as SQLite from 'expo-sqlite';


 import GlobalStyles from './stylesheets/styles';

 const db = SQLite.openDatabase('USERS');

 db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
   console.log('Foreign keys turned on'),
   alert('success')
 );
 

export default function Vuln1Screen({navigation}) {

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    
    useEffect(()=> {
      createTable();
      getData();
    }, []);

    const createTable = () => {
      db.transaction ((tx) => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS'
          + 'USERS'
          + '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Pass TEXT);'
        )
      })
    }

    const getData = () => {
      try {
          db.transaction((tx) => {
              tx.executeSql(
                  "SELECT Name, Pass FROM USERS",
                  [],
                  (tx, results) => {
                      var len = results.rows.length;
                      if (len > 0) {
                          navigation.navigate('Home');
                      }
                  }
              )
          })
      } catch (error) {
          console.log(error);
      }
  }

  const setData = async () => {
      if (name.length == 0 || pass.length == 0) {
          Alert.alert('Warning!', 'Please write your data.')
      } else {
          try {
              await db.transaction(async (tx) => {
                  await tx.executeSql(
                      "INSERT INTO Users (Name, Pass) VALUES (?,?)",
                      [name, pass]
                  );
              })
              navigation.navigate('Home');
          } catch (error) {
              console.log(error);
          }
      }
  }

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
              onChangeText={(value) => setName(value)}
            />
            <TextInput
              style={GlobalStyles.input}
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={(value) => setPass(value)}
            />
            <View style = {GlobalStyles.buttonView}>
              <Button
                title = 'Login'
                onPress = {getData}
              />
              <Button
                title = 'Register'
                onPress = {setData}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
}
