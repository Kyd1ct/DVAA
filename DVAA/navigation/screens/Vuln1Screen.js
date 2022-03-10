import * as React from 'react';
import {View, Text } from 'react-native';

export default function Vuln1Screen(navigation) {
    return(
    <View style ={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
         onPress={() => alert('This is the Home Screen.')}
         style = {{fontSize: 26, fontWeight: 'bold'}}>
            Broken Authentication
        </Text>
      <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
          onPress = {() => alert('...WIP...')}
          style = {{fontSize: 14}}>
              Broken Authentication is a vulnerability where the
          </Text>
      </View>
    </View>
    );
}
