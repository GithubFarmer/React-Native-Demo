/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
/**
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
*/
import React, { Component } from 'react';
import {AppRegistry, Text, View } from 'react-native';

class Register extends Component{
  render() {
    return (
            <View style ={{backgroundColor:'red', marginTop: 100}}>
            <Text style={{
            fontSize:40,
            marginTop:80,
            textAlign:"center"}}> 我爱你 </Text>
            </View>
            );
  }
}
//AppRegistry.registerComponent('RNDemo', () => Register);



