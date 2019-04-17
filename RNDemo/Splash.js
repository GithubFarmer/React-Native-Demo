
import React, { Component } from 'react';
import {AppRegistry, View, Image, BackAndroid, Platform, Text,Button} from 'react-native';
import Register from './Register'
import {Navigator} from 'react-native-deprecated-custom-components'



let navigator;
export default class Splash extends Component {
  constructor(props){
    super(props);
    navigator = this.props.navigator;
  }
  
  ComponentWillMount() {
    if(Platform.OS === 'android'){
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }
  
  onBackAndroid(){
    if(navigator){
      let routes = navigator.getCurrentRoutes();
      if (routes.length > 3){
        navigator.pop();
        return true;
      }
    }
    return false;
  }
  
  ComponentWillUnMount() {
    if(Platform.OS === 'android'){
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }
  
  ComponentDidMount() {
    setTimeOut(() => {
               const navigator = this.props.navigator;
               if(navigator){
               navigator.push({
                              name:'登录界面',
                              Component:Register,
                              params:{
                              data:'login test',
                              }
               })
               }
               },3000);
  }
  
  onPressButton() {
    const navigator = this.props.navigator;
    navigator.push({
                   name:'登录界面',
                   Component:Register,
                   params:{
                   data:'login test',
                   }
                   })
  }

  render(){
    return (
            <View style={{backgroundColor:'red', marginTop: 100}}>
            <Text> Splash 界面</Text>
              <Button
              onPress={this.onPressButton}
              title="Press Me"
              color="yellow">
              </Button>
            </View>
    );
  }
}
//AppRegistry.registerComponent('RNDemo', () =>Splash);


