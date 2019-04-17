
import React, { Component } from 'react';
import { AppRegistry, View,Text, StyleSheet,NativeModules, LayoutAnimation,TouchableOpacity} from 'react-native';

const {UIManager} = NativeModules;
UIManager.setLayoutAnimationEnableExperimental && UIManager.setLayoutAnimationEnableExperimental(true);

export default class App extends React.Component {

   state = {
    w:100,
    h:100,
   };

   _onPress = () => {
     LayoutAnimation.spring();
     this.setState({w:this.state.w + 15,
                   h:this.state.h + 15});
   };

  render() {
    return (
            <View style = {styles.container}>
            <View style={[styles.box, {width:this.state.w,height:this.state.h}]}></View>
            <TouchableOpacity onPress ={this._onPress}>
            <View style={styles.button}>
            <Text style={styles.buttonText}> Press me!</Text>
            </View>
            </TouchableOpacity>
            </View>
            )
  }
}

const styles = StyleSheet.create({

                                 container:{
                                 flex:1,
                                 alignItems:'center',
                                 justifyContent:'center'
                                 },
                                 box:{
                                 width:200,
                                 height:200,
                                 backgroundColor:'red'
                                 },
                                 button:{
                                 backgroundColor:'black',
                                 paddingHorizontal:20,
                                 paddingVertical:15,
                                 marginTop:15
                                 },
                                 buttonText:{
                                 color:'#fff',
                                 fontWeight:'bold'
                                 }


});
AppRegistry.registerComponent('RNDemo', () => App);

