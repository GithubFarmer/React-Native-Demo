import React, {Component} from  'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Splash from './Splash';
import Tab from './BottomTab';
import DetailTest from './DetailTest';


const  HomeStack = createStackNavigator({
    Homes:{
        screen:Tab,
        navigationOptions:{
            header:null,
        }
    },
    DetailTest:{
        screen:DetailTest,
        navigationOptions:{
            header:null,
        }
    },
    Login:{
        screen:Splash
    },
    initialRouteName:'Homes'
});

const  AppStack = createAppContainer(HomeStack);

export default class AppDemo extends Component{
    render(){
        return <AppStack/>
    }
};