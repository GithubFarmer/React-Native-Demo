import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    Alert,
    View,
    Button
} from 'react-native';

import ShouyeProp from './ShouyeProp';


export default class Shouye extends Component{
    constructor(props){
        super(props);

    }

    _click(){
        Alert.alert('提示','确认删除吗？',[{text: '取消',onPress:() => {},style:'cancel'},{text:'确定',onPress:() =>{},style:'cancel'}])
    }

    render() {
        var  param = {name:"李四",age:45};
        return (
            <View style={styles.container}>
                <View style={styles.container1}>
                    <ShouyeProp name={param.name} age={param.age} />
                </View>
                <Button title={"点一下"} onPress={() => this._click()} color={'red'}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        // marginTop:80
    },
    container1:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
        width:200,
        height:30
    },
    text:{
        fontSize:30,
        color:'black'
    }
});

