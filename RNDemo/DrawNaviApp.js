
import React from 'react';
import {AppRegistry, View, Text, Button , Image, StyleSheet} from 'react-native';
import {createAppContainer,createDrawerNavigator,DrawerActions} from 'react-navigation';

class HomeScreen extends React.Component {
  
  static navigationOptions = {
  drawerLabel:'Home',
  drawerIcon:({tintColor}) =>{
    <Image
    source={require('./ios/hello2.jpg')}
    style={[styles.icon,{tintColor:tintColor}]}
    />
  }
  };
  render() {
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
            title = "Go to Details"
            onPress = {() => this.props.navigation.navigate("Details")}
            />
            <Button
            title = "open draw"
            onPress = {() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
            />
            </View>
            );
  }
}

class DetailsScreen extends React.Component {
  
  static navigationOptions = {
  drawerLabel:'Details',
  drawerIcon:({tintColor}) =>{
    <Image
    source={require('./ios/hello2.jpg')}
    style={[styles.icon,{tintColor:tintColor}]}
    />
  }
  };
  render() {
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'red' }}>
            <Text>Details Screen</Text>
            <Button
            title = "转换 draw"
            onPress = {() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
            />
            </View>
            );
  }
}

const styles = StyleSheet.create({
                                icon:{
                                width:24,
                                height:24
                                }
});


const myDrawnavigator = createDrawerNavigator({
                                              Home:HomeScreen,
                                              Details:DetailsScreen
});

const AppContainer = createAppContainer(myDrawnavigator)

export default class App extends React.Component {

  render() {
    return <AppContainer/>;
  }
}

AppRegistry.registerComponent('RNDemo', () => App);
