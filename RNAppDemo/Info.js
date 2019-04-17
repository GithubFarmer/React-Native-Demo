import React,{Component} from 'react';
import { StyleSheet,Text, View} from 'react-native';

export  default class Info extends Component{

    render() {
        return <View style={styles.container}>
            <Text style={styles.text}>我是信息界面</Text>
        </View>
    }

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        flex:1
    },
    text:{
        textAlign: 'center',
        justifyContent:'center',
        marginTop:100
    }
});