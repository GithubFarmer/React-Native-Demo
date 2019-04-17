
import React, { Component } from 'react';
import { AppRegistry, View, Alert, Button, StyleSheet} from 'react-native';

class RNDemo extends Component {
  onPressButton() {
    Alert.alert('You tapper the button!');
  }
  render(){
    return (
            <View style={styles.container}>
            <View style={styles.buttonContainer}>
            <Button
            onPress={this.onPressButton}
            title="Press Me"
            color="red"
            />
            </View>
            <View style={styles.buttonContainer}>
            <Button
            onPress={this.onPressButton}
            title="Press Me"
            color="blue"
            />
            </View>
            <View style={styles.alternativeLayoutButtonContainer}>
            <Button
            onPress={this.onPressButton}
            title="Press Me"
            color="yellow"
            />
            </View>
            </View>
    );
  }
}

const styles = StyleSheet.create({
                                 container:{
                                 flex:1,
                                 justifyContent:'center'
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



