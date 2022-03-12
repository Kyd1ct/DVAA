import * as React from 'react';
import {View, Text } from 'react-native';

export default function Vuln3Screen(navigation) {
    return(
    <View style ={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
         onPress={() => alert('Vulnerability 3 screen.')}
         style = {{fontSize: 26, fontWeight: 'bold'}}>
                Vulnerability 3 Screen
        </Text>

    </View>
    );
}
