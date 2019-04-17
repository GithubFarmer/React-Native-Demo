
import React from 'react';
import {AppRegistry, View, Text, Button , Image} from 'react-native';
import { createBottomTabNavigator,createAppContainer} from 'react-navigation';

class HomeScreen extends React.Component {

  render() {
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
            title = "Go to Details"
            onPress = {() => this.props.navigation.navigate("Settings")}
            />
            </View>
            );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'red' }}>
            <Text>Details Screen</Text>
            </View>
            );
  }
}


const Tabnavigator = createBottomTabNavigator({
                                              Home:HomeScreen,
                                              Settings:DetailsScreen
                                              }
                                              )

const AppContainer = createAppContainer(Tabnavigator)

export default class App extends React.Component {

  render() {
    return <AppContainer/>;
  }
}

AppRegistry.registerComponent('RNDemo', () => App);
