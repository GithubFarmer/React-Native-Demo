import React,{Component} from 'react';
import { StyleSheet,Text, View} from 'react-native';

export  default class Me extends Component{
    render() {
        return <View style={styles.container}>
            <Text style={styles.text}
                  onPress={ () => this.props.navigate('Home')}
            >登录界面</Text>
        </View>
    }

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'green',
        flex:1
    },
    text:{
        textAlign: 'center',
        justifyContent:'center',
        marginTop:100
    }
});