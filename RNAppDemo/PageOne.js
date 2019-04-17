import React,{Component} from 'react';
import {View, Text, StyleSheet} from  'react-native';
import {Actions} from "react-native-router-flux";
import ImageTest from "./ImageTest";

export  default  class  PageOne extends  Component{

    static  navigationOptions ={
        headerTitle:'AAA'
    }

    render(){
        return <View style={styles.container}>
            <Text style={styles.text}
            onPress={() => Actions.ImageTest()}
            > 我是pageOne </Text>

        </View>
    }

}

const  styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        flex:1
    },
    text:{
        fontSize:20,
        marginTop:100,
        justifyContent:'center',
        textAlign:'center',
        borderWidth:1,
        borderColor:'black',
        width:200,
        height:30,
        alignItems:'center'
    }
});