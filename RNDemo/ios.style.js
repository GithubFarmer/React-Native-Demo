import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

//样式的定义，属性重复设置按照最后一个显示（如颜色）
export default class RNDemo extends Component {
  render() {
    return(<View>
           <Text style={styles.red}>just red</Text>
           <Text style={styles.bigBlue}>just bigBlue</Text>
           <Text style={[styles.bigBlue,styles.red]}>bigBlue, then red</Text>
           <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
           </View>
           );
  }
}

const styles = StyleSheet.create({
                                 bigBlue:{
                                 color:'blue',
                                 fontWeight:'bold',
                                 fontSize:30
                                 },
                                 red:{
                                 color:'red'
                                 }
                                 });
AppRegistry.registerComponent('RNDemo', () => RNDemo);

