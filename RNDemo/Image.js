
import React, { Component } from 'react';
import { AppRegistry, View, ImageBackground, Text, StyleSheet} from 'react-native';

class RNDemo extends Component {

  render(){
    return (
            <ImageBackground
            source={require('./ios/hello2.jpg')}
            style={{width:'100%',height:'100%'}}>
            <Text style={styles.alternativeLayoutButtonContainer}>aaaaaaa</Text>
            </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
                                 container:{
                                 flex:1,
                                 justifyContent:'center',
                                 alignItems:'center'
                                 },
                                 buttonContainer:{
                                 margin:20
                                 },
                                 alternativeLayoutButtonContainer:{
                                 margin:20,
                                 flexDirection:'row',
                                 justifyContent:'space-between',
                                 width:140,
                                 height:40,
                                 backgroundColor:'red'
                                 }
})

AppRegistry.registerComponent('RNDemo', () => RNDemo);



