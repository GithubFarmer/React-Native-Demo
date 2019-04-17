
import React from 'react';
import {AppRegistry, View, Text, Button , Image} from 'react-native';
import {  createBottomTabNavigator,createAppContainer, createStackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title:"home"
  }
  render() {
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
            title = "Go to Details"
            onPress = {() => this.props.navigation.navigate("Details")}
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

class SettingsScreen extends React.Component {
  static navigationOptions = {
  title:"Setting"
  }
  render() {
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
            title = "Go to Details"
            onPress = {() => this.props.navigation.navigate("Details")}
            />
            </View>
            );
  }
}

const HomeStack = createStackNavigator({
                                       Home:HomeScreen,
                                       Details:DetailsScreen
});

const SettingsStack = createStackNavigator({
                                           Settings:SettingsScreen,
                                           Details:DetailsScreen
});


const Tabnavigator = createBottomTabNavigator({
                                              Home:HomeStack,
                                              Settings:SettingsStack
                                              }
                                              );

const AppContainer = createAppContainer(Tabnavigator);

export default class App extends React.Component {

  render() {
    return <AppContainer/>;
  }
}

AppRegistry.registerComponent('RNDemo', () => App);
