import * as React from 'react';
import {View, Text } from 'react-native';
import { Dialogflow_V2 } from "react-native-dialogflow"
import { Dialogflow } from 'react-native-dialogflow/js/Dialogflow';
class DialogFlow extends Dialogflow {
constructor(props) {
    super(props);

    Dialogflow_V2.setConfiguration(
        "your-dialogflow-project@asdf-76866.iam.gserviceaccount.com",
        '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADAN...1oqOawdddddiojdq9wq09wd81u1ijzcjkllasd\n-----END PRIVATE KEY-----\n',
        Dialogflow_V2.LANG_ENGLISH,
        'testv2-3b4dss',
        'FLAG{WTF_API}'
    );
}
}


export default function Vuln2Screen(navigation) {
    
    return(
    <View style ={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
         onPress={() => alert('This is the Home Screen.')}
         style = {{fontSize: 26, fontWeight: 'bold'}}>
                Vulnerability 2 Screen
        </Text>
    </View>
    );
}
