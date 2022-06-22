import React, { useState} from 'react';
import {View, Text, Button, ScrollView, TextInput, Alert, Linking } from 'react-native';
import { Dialogflow_V2 } from "react-native-dialogflow"
import { Dialogflow } from 'react-native-dialogflow/js/Dialogflow';
import GlobalStyles from './stylesheets/styles';
class DialogFlow extends Dialogflow {
constructor(props) {
    super(props);

        Dialogflow_V2.setConfiguration(
            "your-dialogflow-project@asdf-76866.iam.gserviceaccount.com",
            '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADAN...1oqOawdddddiojdq9wq09wd81u1ijzcjkllasd\n-----END PRIVATE KEY-----\n',
            Dialogflow_V2.LANG_ENGLISH,
            'testv2-3b4dss',
            'FLAG{WOW_API}'
        );
    }
}




export default function Vuln3Screen(navigation) {
    url = 'https://drive.google.com/file/d/1Q6IVqhCVi9GbxPzv6p85xC4SbBNb70b2/view?usp=sharing'
    
    const [flag, setFlag] = useState('');

    function checkFlag() {
        if (flag.length == 0) {
            alert ('Field is empty! Please input the flag.')
        }
        else if (flag == 'FLAG{WOW_API}'){
            Alert.alert('Victory!',
                        'Congratulations, you found the flag!')
        } else {
            Alert.alert('Oh no!',
                        'Invalid flag. Please try again.')
        }
    }
    return(
    <ScrollView style = {GlobalStyles.container}>
        <View style = {GlobalStyles.flex1}>
            <Text style = {GlobalStyles.title}>
                WOW an API?
            </Text>
            <View style ={GlobalStyles.loginStylesheet}>

                <TextInput
                    style={GlobalStyles.input}
                    placeholder="Please enter the Flag"
                    onChangeText={(flag) => setFlag(flag)}
                />
                <View style={{height: 30}} />

                <View style = {GlobalStyles.buttonView}>
                    <Button
                        title = 'Hint'
                        style = {{}}
                        onPress = {() => Alert.alert( 'Hints',
                                                '1. Perhaps the archives are complete? \n2. Bundle your power. \n3. Seek the flag and ye shall find.')}
                    />
                    <View style={{width: 70}} />
                    <Button
                        title = 'Submit'
                        onPress = {checkFlag}
                    />
                </View>
                <View style={{height: 30}} />
                <View style = {GlobalStyles.buttonCenter}>
                <Button
                        title = 'Walkthrough'
                        style = {{}}
                        onPress = {() => Linking.openURL(url).catch((err) => {console.log(err)})}
                    />
                </View>
            </View>
        </View>
    </ScrollView>
    );
}