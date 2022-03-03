import * as React from 'react';
import {View, Text } from 'react-native';

export default function Vuln2Screen(navigation) {
    return(
    <View style ={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
         onPress={() => alert('This is the Home Screen.')}
         style = {{fontSize: 26, fontWeight: 'bold'}}>
                Vulnerabilitie 2 Screen
        </Text>
    </View>
    );
}
