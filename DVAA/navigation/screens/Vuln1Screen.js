import React, { useState, useEffect } from 'react';
import {ScrollView, View, Text , TextInput, Button, Alert, String} from 'react-native';
import * as SQLite from 'expo-sqlite';


 import GlobalStyles from './stylesheets/styles';

 

 const db = SQLite.openDatabase("USERS");
 var userName;
 var userPass;

 export default function Vuln1Screen({navigation}) {

  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

     useEffect(()=> {
       createTable();
       }, []);

    function createTable() {
      db.transaction((tx) => {
        tx.executeSql(
          "create table if not exists items (ID integer primary key not null, Name text, Password text);"
        );
        Alert.alert('Success')
      });
    }

     const getData = () => {
        try {
            // AsyncStorage.getItem('UserData')
            //     .then(value => {
            //         if (value != null) {
            //             navigation.navigate('Home');
            //         }
            //     })
            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT * FROM USERS",
                    [],
                    (_, results) => {
                        var len = results.rows.length;
                        if (len > 0) {
                            Alert.alert(len);
                        }
                        else if (len = 0) {
                          Alert.alert('Failed transaction!');
                        }
                    }
                )
            })
        } catch (error) {
            console.log(error);
        }
    }


    const setData = async () => {
      if (name.length == 0 && pass.length == 0) {
          Alert.alert('Warning!', 'Please write your data.')
      } else {
          try {
              // var user = {
              //     Name: name,
              //     Age: age
              // }
              // await AsyncStorage.setItem('UserData', JSON.stringify(user));
              await db.transaction(async (tx) => {
                  // await tx.executeSql(
                  //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
                  // );
                  await tx.executeSql(
                      "INSERT INTO Users (Name, Age) VALUES (?,?)",
                      [name, pass]
                  );
                  //navigation.navigate('Home');
                  Alert.alert(name,pass);
              })

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
              onChangeText={(name) => setName(name)}
            />
            <TextInput
              style={GlobalStyles.input}
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={(pass) => setPass(pass)}
            />
            <View style = {GlobalStyles.buttonView}>
              <Button
                title = 'Login'
                onPress = {getData}
              />
              <View style={{width: 70}} />
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
