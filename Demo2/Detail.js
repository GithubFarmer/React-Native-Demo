import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import Detail1 from  './Detail1';
import Detail11 from './Detail11';
import RainFlatList from './RainFlatList'

import {createStackNavigator,createAppContainer} from "react-navigation";

import TabNavigator from 'react-native-tab-navigator';
type props = {}


export default class Detail extends Component<props>{

    constructor(props){
        super(props);
    }
    render(){
        return (
          <AppCreate/>
        );
    }
}

class DetailCom extends Component<props>{
    static  navigationOptions = {
        title : "TODE"
    }

    constructor(props){
        super(props);

    }
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>首页</Text>
                <Button title={"点我"} onPress={() => this._click()}></Button>
            </View>
        );
    }

    _click(){
        this.props.navigation.push('Happy',{itemId:110,name:'BOB'});
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'yellow'
    },
    text:{
        fontSize:30,
        color:'black'
    }
});

const AppRouter = createStackNavigator({
    MyTab:RainFlatList,
    Happy:Detail1,
    Next:Detail11,
});

const  AppCreate = createAppContainer(AppRouter);