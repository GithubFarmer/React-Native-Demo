
import React, { Component } from 'react';
import { AppRegistry, View, Alert, Platform, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';

class RNDemo extends Component {
  onPressButton() {
    Alert.alert('You tapper the button!');
  }
  onLongPressButton() {
    Alert.alert('Your Long-pressed the button!');
  }
  render(){
    return (
            <View style={styles.container}>
              <TouchableHighlight onPress={this.onPressButton} underlayColor="yellow">
                <View style={styles.button}>
                <Text style={styles.buttonText}> TouchableHighlight </Text>
                </View>
              </TouchableHighlight>
            
            <TouchableOpacity onPress={this.onPressButton}>
            <View style={styles.button}>
            <Text style={styles.buttonText}> TouchableOpacity </Text>
            </View>
            </TouchableOpacity>
            
            <TouchableNativeFeedback
            onPress={this.onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
            >
            <View style={styles.button}>
            <Text style={styles.buttonText}> TouchableNativeFeedback </Text>
            </View>
            </TouchableNativeFeedback>
            
            <TouchableWithoutFeedback onPress={this.onPressButton}>
            <View style={styles.button}>
            <Text style={styles.buttonText}> TouchableOpacity </Text>
            </View>
            </TouchableWithoutFeedback>
            
            <TouchableHighlight
            onPress={this.onPressButton}
            onLongPress={this.onLongPressButton}
            underlayColor="red"
            >
            <View style={styles.button}>
            <Text style={styles.buttonText}> touchable with Long Press </Text>
            </View>
            </TouchableHighlight>
            </View>
    );
  }
}

const styles = StyleSheet.create({
                                 container:{
                                 paddingTop:60,
                                 alignItems:'center'
                                 },
                                 button:{
                                 marginBottom:30,
                                 width:260,
                                 alignItems:'center',
                                 backgroundColor:'#2196F3'
                                 },
                                 buttonText:{
                                 padding:20,
                                 color:'white'
                                 }
})

AppRegistry.registerComponent('RNDemo', () => RNDemo);



