import React, { useState, useEffect } from 'react';
import {ScrollView, View, Text , TextInput, Button, Alert, String} from 'react-native';
import Constants from "expo-constants";
import { Asset } from 'expo-asset';
import { Updates } from 'expo';
import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';
import connect, {sql} from '@databases/expo';


import GlobalStyles from './stylesheets/styles';

const db = SQLite.openDatabase('DB');


export default function VulnScreen1({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    createTable();
    getData();
  }, []);

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS Users "
        + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Username TEXT, Password TEXT);"
      )
    })
  }

  const setData = async () => {
    if (username.length == 0 || password.lenght == 0) {
      Alert.alert('Warning!', 'Please enter your details.')
    }
    else {
      try {
        await db.transaction(async (tx) => {
          await tx.executeSql(
            "INSERT INTO users (Username, Password) VALUES (?,?)"
            [username, password]
          );
        })
        navigation.navigate('LoggedIn');
    } catch (error) {
        console.log(error);
      }
    }
  }

  const getData = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT Username, Password FROM Users",
          [],
          (tx, results) => {
          var len = results.rows.lenght;
            if (len > 0) {
              navigation.navigate('LoggedIn');
            }
          }
        )
      })
    } catch (error) {
      console.log(error);
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
            onChangeText={(username) => setUsername(username)}
          />
          <TextInput
            style={GlobalStyles.input}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
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
            <Button
              title = 'Hint'
              onPress = {getData}
            />

          </View>
        </View>
      </View>
    </ScrollView>
  );
};







    // const db = SQLite.openDatabase("USERS");
    // var userName;
    // var userPass;
    //
    // export default function Vuln1Screen({navigation}) {
    //
    //  const [username, setUsername] = useState('');
    //  const [password, setPassword] = useState('');
    //
    //     useEffect(()=> {
    //       createTable();
    //       }, []);
    //
    //    function createTable() {
    //      db.transaction((tx) => {
    //        tx.executeSql(
    //          "create table if not exists items (ID integer primary key not null, Name text, Password text);"
    //        );
    //        Alert.alert('Logged in Success')
    //      });
    //    }
    //
    //     const getData = () => {
    //        try {
    //            // AsyncStorage.getItem('UserData')
    //            //     .then(value => {
    //            //         if (value != null) {
    //            //             navigation.navigate('Home');
    //            //         }
    //            //     })
    //            db.transaction((tx) => {
    //                tx.executeSql(
    //                    "SELECT * FROM USERS",
    //                    [],
    //                    (_, results) => {
    //                        var len = results.rows.length;
    //                        if (len > 0) {
    //                            Alert.alert(len);
    //                        }
    //                        else if (len = 0) {
    //                          Alert.alert('Failed transaction!');
    //                        }
    //                    }
    //                )
    //            })
    //        } catch (error) {
    //            console.log(error);
    //        }
    //    }
    //
    //
    //    const setData = async () => {
    //      if (name.length == 0 && pass.length == 0) {
    //          Alert.alert('Warning!', 'Please write your data.')
    //      } else {
    //          try {
    //              // var user = {
    //              //     Name: name,
    //              //     Age: age
    //              // }
    //              // await AsyncStorage.setItem('UserData', JSON.stringify(user));
    //              await db.transaction(async (tx) => {
    //                  // await tx.executeSql(
    //                  //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
    //                  // );
    //                  await tx.executeSql(
    //                      "INSERT INTO Users (Name, Age) VALUES (?,?)",
    //                      [name, pass]
    //                  );
    //                  //navigation.navigate('Home');
    //                  Alert.alert(name,pass);
    //              })
    //
    //          } catch (error) {
    //              console.log(error);
    //          }
    //      }
    //  }
