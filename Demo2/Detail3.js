import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';


import TabNavigator from 'react-native-tab-navigator';
type props = {}

var navigation = null;

export default class Home extends Component<props>{
    constructor(props){
        super(props);
        navigation = this.props;
    }
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>文章</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red'
    },
    text:{
        fontSize:30,
        color:'black'
    }
});