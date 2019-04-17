import React,{Component} from  'react';
import {createBottomTabNavigator} from "react-navigation";
import {StyleSheet, Dimensions, Platfrom} from  'react-native';
import Icon from 'react-native-vector-icons';

import Home from './Home/GDHome';
import Ht from  './Ht/Ht';
import HourList from './HourList/HourList';
import color from './Colors';

var BottomTab;
var focused;
export  default BottomTab = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarPosition: 'bottom',
            tabBarLabel: '首页',
            showLabel: false,
            tabBarIcon: ({tintColor, fucosed}) => (
                <Icon
                    name={focused ? 'ios-stats' : 'ios-stats-outline'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    Ht: {
        screen: Ht,
        navigationOptions: {
            tabBarPosition: 'bottom',
            tabBarLabel: '首页',
            showLabel: false,
            tabBarIcon: ({tintColor, fucused}) => (
                <Icon
                    name={focused ? 'ios-stats' : 'ios-stats-outline'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    HourList: {
        screen: HourList,
        navigationOptions: {
            tabBarPosition: 'bottom',
            tabBarLabel: '首页',
            showLabel: false,
            tabBarIcon: ({tintColor, fucused}) => (
                <Icon
                    name={focused ? 'ios-stats' : 'ios-stats-outline'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    }
},{
    tabBarOptions:{
        activeTintColor: color.primary,
        inactiveTintColor:color.gray,
    },
    animationEnable:true,
    swipeEnabled:true,
    initialRouteName:'Home',
});