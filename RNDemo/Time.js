
import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet} from 'react-native';


export default class App extends React.Component {
  
  state = {
    count : 0
  }
  
  _onPress = () => {
    this.setState({count:this.state.count + 2});
    console.log("==========123");
  };
  
  componentDidMount() {
    
//    setTimeout //延时函数
//    setInterval //间隔函数
//    setImmediate //即刻函数
 
    this.timer = setInterval(() => {{
                            console.log("把一个定时器的引用挂在this上:");
                            this.setState({count:this.state.count + 3});
                             var str = '定时器count：${this.state.count}';
                             console.log(str);
                            this._onPress;
                             }
                             },2000);
  };
  
  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  };
  
  render() {
    return (
            <View style = {styles.container}>
              <Text>count:{this.state.count} </Text>
            </View>
            )
  }
}

const styles = StyleSheet.create({

                                 container:{
                                 flex:1,
                                 alignItems:'center',
                                 justifyContent:'center',
                                  backgroundColor:'red'
                                 }
                                 }
);

AppRegistry.registerComponent('RNDemo', () => App);

