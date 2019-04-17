import React,{Component} from 'react';
import { StyleSheet,Text, View, Button} from 'react-native';
import {Actions} from "react-native-router-flux";
import PageOne from './PageOne'


export  default class Task extends Component{

    render() {
        return <View style={styles.container}>
            <Text style={styles.text}
                  onPress={() => Actions.push('PageOne')}
            >我是任务界面</Text>
            <Button title={'点一点'} onPress={() => Actions.push('PageOne')}></Button>
        </View>
    }

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'yellow',
        flex:1
    },
    text:{
        textAlign: 'center',
        justifyContent:'center',
        marginTop:100
    }
});