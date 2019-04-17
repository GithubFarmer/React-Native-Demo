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
import { AppRegistry } from 'react-native';
import { Text, View } from 'react-native';


//demo1 加载hello world
//import { AppRegistry, Text } from 'react-native';
//class RNDemo extends Component {
//  render() {
//    return (
//            <Text>Hello world!</Text>
//
//    );
//  }
//}


//demo2 加载图片
//import { Image } from 'react-native';
//class RNDemo extends Component {
//  render() {
//    let pic = {
//    uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//    };
//    return (<Image source={pic} style={{width:293, height:110}} />);
//  }
//}


//demo3 文字的闪烁和定时器的使用
//import { Text, View } from 'react-native';
/////class Blink extends Component {
//  constructor(props) {
//    super(props);
//    this.state = { isShowingText: true };
//
//    // 每1000毫秒对showText状态做一次取反操作
//    setInterval(() => {
//                this.setState(previousState => {
//                              return { isShowingText: !previousState.isShowingText };
//                              });
//                }, 1000);
//  }
//
//  render() {
//    // 根据当前showText的值决定是否显示text内容
//    if (!this.state.isShowingText) {
//      return null;
//    }
//
//    return (
//            <Text>{this.props.text}</Text>
//            );
//  }
//}
//
//export default class RNDemo extends Component {
//  render() {
//    return (
//            <View>
//            <Blink text='I love to blink' />
//            <Blink text='Yes blinking is so great' />
//            <Blink text='Why did they ever take this out of HTML' />
//            <Blink text='Look at me look at me look at me' />
//            </View>
//            );
//  }
//}


//demo4 多行文字的排列
//class Greeting extends Component {
//  render() {
//    return (
//            <View style={{alignItems: 'center'}}>
//            <Text>Hello {this.props.name}!</Text>
//            </View>
//           );
//  }
//}
//
//export default class RNDemo extends Component {
//  render() {
//    return (
//            <View style={{alignItems: 'center'}}>
//            <Greeting name='Rexxar' />
//            <Greeting name='Jaina' />
//            <Greeting name='Valeera' />
//            </View>
//            );
//  }
//}

class RNDemo extends Component{
  render() {
    return (
      <Text> 我爱你 </Text>
            );
  }
}

AppRegistry.registerComponent('RNDemo', () => RNDemo);



