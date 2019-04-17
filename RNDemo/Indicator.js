
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Text, View, StyleSheet, ActivityIndicator, Button} from 'react-native';

class RNDemo extends Component{
  
  onPressLearnMore() {
    
  }
  
  render() {
    return (
            <View style={[styles.container,styles.horizontal]}>
            <ActivityIndicator size ="large" color="#0000ff"/>
            <ActivityIndicator size ="small" color="#00ff00"/>
            <ActivityIndicator size ="large" color="#0000ff"/>
            <ActivityIndicator size ="small" color="#00ff00"/>
            <Button
            onPress={this.onPressLearnMore}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            testID = "123"
            />
            </View>
            );
  }
}

const styles = StyleSheet.create({
                                 container:{
                                 flex:0.6,
                                 justifyContent:'center'
                                 },
                                 horizontal:{
                                 flexDirection:'row',
                                 justifyContent:'space-around',
                                 padding:10
                                 }
});

AppRegistry.registerComponent('RNDemo', () => RNDemo);



