import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';


import Home1 from './Detail';
import Article from './Shouye';
import Order from './Detail3';
import Owner from './Detail2';

const dataSource = [
    {icon:require('./image/menu_goddess.png'),selectedIcon:require('./image/menu_goddessSel.png'),tabPage:'Home1',tabName:'首页',component:Home1},
    {icon:require('./image/menu_goddess.png'),selectedIcon:require('./image/menu_goddessSel.png'),tabPage:'Article',tabName:'文章',component:Article},
    {icon:require('./image/menu_goddess.png'),selectedIcon:require('./image/menu_goddessSel.png'),tabPage:'Order',tabName:'订单',component:Order},
    {icon:require('./image/menu_goddess.png'),selectedIcon:require('./image/menu_goddessSel.png'),tabPage:'Owner',tabName:'我的',component:Owner}
]
var navigation = null;


export default class Home extends Component{
    constructor(props){
        super(props);
        navigation = this.props.navigation;
        // const otherParam = navigation.getParameter('otherParam', 'some default value');
        this.state = {
            selectedTab:'Home1'
        }
    }

    render() {
        let tabViews = dataSource.map((item,i) => {
            return (
                <TabNavigator.Item
                    title={item.tabName}
                    selected={this.state.selectedTab===item.tabPage}
                    titleStyle={{color:'black'}}
                    selectedTitleStyle={{color:'#7A16BD'}}
                    renderIcon={()=><Image style={styles.tabIcon} source={item.icon}/>}
                    renderSelectedIcon = {() => <Image style={styles.tabIcon} source={item.selectedIcon}/>}
                    tabStyle={{alignSelf:'center'}}
                    onPress = {() => {this.setState({selectedTab:item.tabPage})}}
                    key={i}
                >
                    <item.component  navigation={navigation}/>
                </TabNavigator.Item>
            );
        })
        return (
            <View style={styles.container}>
                <TabNavigator
                    hidesTabTouch={true}
                >
                    {tabViews}
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    tabIcon:{
        width:23,
        height:23,
    }
});