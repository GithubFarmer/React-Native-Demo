
import React from 'react';
import {AppRegistry, View, Text, Button , Image} from 'react-native';
import { createBottomTabNavigator,createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';

class HomeScreen extends React.Component {

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

class ProfileScreen extends React.Component {
  render() {
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'yellow' }}>
            <Text>ProfileScreen</Text>
            </View>
            );
  }
}

class AuthScreen extends React.Component {
  render() {
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'yellow' }}>
            <Text>AuthScreen</Text>
            <Button
            title = "Go to home"
            onPress = {() => this.props.navigation.navigate("Home")}
            />
            </View>
            );
  }
}

const FeedStack = createStackNavigator({
                   FeedHome :HomeScreen
});

const TabNavi = createBottomTabNavigator({
                                         Feed:HomeScreen,
                                         Profile:ProfileScreen
});

const HomeStack = createStackNavigator({
                                       Tabs:TabNavi,
                                       Details:DetailsScreen
});

const AppNavi = createSwitchNavigator({
                                      Auth:AuthScreen,
                                      Home:HomeStack
});


const AppContainer = createAppContainer(AppNavi)

export default class App extends React.Component {

  render() {
    return <AppContainer/>;
  }
}

AppRegistry.registerComponent('RNDemo', () => App);
