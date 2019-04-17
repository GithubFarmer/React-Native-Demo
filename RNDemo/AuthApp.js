
import React from 'react';
import {AppRegistry, View, Text, Button , Image, ActivityIndicator, AsyncStorage, StatusBar, StyleSheet} from 'react-native';
import {createSwitchNavigator,createAppContainer, createStackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title:"Welcome to the app!"
  }
  render() {
    return (
            <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
            title = "Go to Details"
            onPress = {() => this.props.navigation.navigate("Details")}
            />
            <Button title = "show me more of the app"  onPress ={this._showMoreApp}/>
            <Button title = "Actually, sign me out: (退出)" onPress ={this._signOutAsync}/>
            </View>
            );
  }
  
  _showMoreApp = () => {
    this.props.navigation.navigate('Details');
  }
  
  _signOutAsync = async() => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('single');
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title : 'Lots of features here',
  }
  
  render() {
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'red' }}>
            <View style ={[styles.container, {height:100, width: 100}]}></View>
            </View>
            );
  }
}

class AuthScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAysnc();
  }
  
  _bootstrapAysnc = async() => {
    const userToken = await AsyncStorage.getItem('userToken');
//   this.setTimeOut(() => {
                      this.props.navigation.navigate(userToken ? 'app' : 'single')
//                    },1000);
  };
  
  render() {
    return (
            <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'yellow'}}>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
            </View>
            );
  }
}

class SingleScreen extends React.Component {
  static navigationOptions = {
  title:"Please sign in"
  }
  render() {
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SingleScreen 注册登录界面</Text>
            <Button
            title = "Sign in!"
            onPress = {this._signInAsync}
            />
            </View>
            );
  }
  
  _signInAsync = async() =>{
    await AsyncStorage.setItem('userToken','abc');
    this.props.navigation.navigate('app');
  };
  
}

const styles = StyleSheet.create({
                                 container:{
                                 flex:1,
                                 alignItems:'center',
                                 justifyContent:'center',
                                 backgroundColor:'white'
                                 }
});

const appStack = createStackNavigator({
                                       Home:HomeScreen,
                                       Details:DetailsScreen
});

const SingleStack = createStackNavigator({
                                           Single:SingleScreen,
});

const switchStack = createSwitchNavigator(
                                          {
                                          authLoading:AuthScreen,
                                          app:appStack,
                                          single:SingleStack
                                          },{
                                          initialRouteName:'authLoading'
                                          }
                                          );

const AppContainer = createAppContainer(switchStack);

export default class App extends React.Component {

  render() {
    return <AppContainer/>;
  }
}

AppRegistry.registerComponent('RNDemo', () => App);
