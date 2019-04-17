import React,{Component} from 'react';
import { StyleSheet,Text, View} from 'react-native';

export  default class Me extends Component{

    render() {
        return <View style={styles.container}>
            <Text style={styles.text}>我的界面</Text>
        </View>
    }

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'blue',
        flex:1
    },
    text:{
        textAlign: 'center',
        justifyContent:'center',
        marginTop:100
    }
});