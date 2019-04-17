
import React, { Component } from 'react';
import { AppRegistry, View} from 'react-native';

class RNDemo extends Component {
  render(){
    return (
            //Flex Direction 竖直布局(column)，flex是一个指定的数值
//            <View style={{flex:1, flexDirection:'row'}}>
//            <View style={{width:50, height:50, backgroundColor: 'powderblue'}}></View>
//            <View style={{width:50, height:50, backgroundColor: 'skyblue'}}></View>
//            <View style={{width:50, height:50, backgroundColor: 'steelblue'}}></View>
//            <View style={{width:50, height:50, backgroundColor: 'blue'}}></View>
//            </View>
            
            //Justify Content 属性值：flex-start、center、flex-end、space-around、space-between以及space-evenly
//            <View style={{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
//            <View style={{width:50, height:50, backgroundColor: 'powderblue'}}></View>
//            <View style={{width:50, height:50, backgroundColor: 'skyblue'}}></View>
//            <View style={{width:50, height:50, backgroundColor: 'steelblue'}}></View>
//            <View style={{width:50, height:50, backgroundColor: 'blue'}}></View>
//            </View>
            
            //Align Items 属性值：flex-start, center, flex-end以及stretch
            <View style={{flex:2, flexDirection:'column', justifyContent:'center', alignItems:'stretch'}}>
            <View style={{width:50, height:50, backgroundColor: 'powderblue'}}></View>
            <View style={{height:50, backgroundColor: 'skyblue'}}></View>
            <View style={{height:100, backgroundColor: 'steelblue'}}></View>
            <View style={{height:150, backgroundColor: 'blue'}}></View>
            </View>
    );
  }
}

AppRegistry.registerComponent('RNDemo', () => RNDemo);



