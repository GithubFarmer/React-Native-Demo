
import React, { Component } from 'react';
import { AppRegistry, View} from 'react-native';

class RNDemo extends Component {
  render(){
    return (
            //设置固定的高度
//            <View>
//            <View style={{width:50, height:50, backgroundColor: 'powderblue'}}></View>
//            <View style={{width:100, height:100, backgroundColor: 'skyblue'}}></View>
//            <View style={{width:150, height:150, backgroundColor: 'steelblue'}}></View>
//            <View style={{width:200, height:200, backgroundColor: 'blue'}}></View>
//            </View>
            //设置弹性高度
            <View style={{flex:1}}>
            <View style={{flex:1, backgroundColor: 'powderblue'}}></View>
            <View style={{flex:2, backgroundColor: 'skyblue'}}></View>
            <View style={{flex:3, backgroundColor: 'steelblue'}}></View>
            <View style={{flex:1, backgroundColor: 'blue'}}></View>
            </View>
    );
  }
}

AppRegistry.registerComponent('RNDemo', () => RNDemo);



