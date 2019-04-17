import React,{Component} from 'react';
import { StyleSheet,Text, View} from 'react-native';

export  default class Me extends Component{
    static navigationOptions = {
        title:'海淘折扣'
    }
    render() {
        return <View style={styles.container}>
            <Text style={styles.text}>我的界面</Text>
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