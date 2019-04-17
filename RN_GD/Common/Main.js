import  React, {Component} from 'react';
import {View, StyleSheet, Image, Platform, DeviceEventEmitter} from 'react-native';
import GDHome from './Home/GDHome'
import HourList from './HourList/HourList';
import Ht from './Ht/Ht';
// 引入第三方框架
import TabNavigator from 'react-native-tab-navigator';
import {Navigator} from 'react-native-deprecated-custom-components';


export default  class Main extends Component{

    constructor (props) {
        super(props);
        this.state = {
          selectedTab:'Home',
          isHiddenTabBar:false,
          homeBadgeText:'',
          htBadgeText:'',
        };
    }

    setNavAnimationType(route){
        if (route.animationType){
            let conf = route.animationType;
            conf.gestures = null;
            return conf;
        }else {
            return Navigator.SceneConfigs.PushFromRight;
        }
    }
    // 点击了Item
    clickItem(selectedTab, subscription) {

        // if (subscription !== "" && this.state.selectedTab == selectedTab) {
        //     // 发送通知
        //     DeviceEventEmitter.emit(subscription);
        // }

        // 渲染页面
        this.setState({ selectedTab: selectedTab })
    }


    //返回 Tabbar 的Item
    renderTabBarItem(title, selectedTab, image, selectedImage, component, badgeText, subscription){
        return <TabNavigator.Item
            selected={this.state.selectedTab === selectedTab}
            title={title}
            badgeText={badgeText == 0 ? '' : badgeText}
            selectedTitleStyle={{color:'black'}}
            renderIcon={() => <Image source={{uri:image}} style={styles.tabBarIconStyle} />}
            renderSelectedIcon={() => <Image source={{uri:selectedImage}} style={styles.tabBarIconStyle} />}
            onPress={() => this.clickItem(selectedTab,subscription)}
        >
            <Navigator initialRoute={{name:selectedTab, component: component}}
                       configureScene={(route) => this.setNavAnimationType(route)}
                       renderScene={(route, navigator) =>{
                           let component = route.component;
                           return <Component  {...route.component}
                                                navigator={navigator}

                           />
                       }}
            />
            </TabNavigator.Item>

    }


    render() {
        return (
            <TabNavigator
            tabBarStyle={this.state.isHiddenTabBar !== true ? {} : {height: 0, overflow:'hidden'}}
            sceneStyle={this.state.isHiddenTabBar !== true ? {} : {paddingBottom:0}}
            >
                {this.renderTabBarItem('首页', 'Home', 'tabbar_home_30x30','tabbar_home_selected_30x30',GDHome,this.state.homeBadgeText,'clickHome')}
                {this.renderTabBarItem('首页', 'Home', 'tabbar_home_30x30','tabbar_home_selected_30x30',GDHome,this.state.homeBadgeText,'clickHome')}
                {this.renderTabBarItem('首页', 'Home', 'tabbar_home_30x30','tabbar_home_selected_30x30',GDHome,this.state.homeBadgeText,'clickHome')}

            </TabNavigator>
        );
    }

}

const  styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    },
    tabBarIconStyle:{
        width:Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25
    },
});