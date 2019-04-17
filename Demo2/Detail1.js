import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';


import TabNavigator from 'react-native-tab-navigator';
type props = {}

export default class Detail1 extends Component<props>{
    static  navigationOptions = {
        title : "Welcome to Detail1!!!"
    }
    constructor(props) {
        super(props);
    }
    _backAction(){
        this.props.navigation.goBack();
    }

    _click(){
        this.props.navigation.navigate('Next',{'cardId':'119','cardName':'网仓三号'});
    }

    render(){
        const {navigation} = this.props;
        const  itemId = navigation.getParam('itemId','1223');
        const  name = navigation.getParam('name','fdafa');
        return (
            <View style={styles.container}>
                <Text style={styles.text}>首页:{JSON.stringify(itemId)}==={JSON.stringify(name)}</Text>
                <Text style={styles.text}>Next:{itemId}==={name}</Text>
                <Button title={"返回"} onPress={() => this._backAction()}/>
                <Button title={"下一页"} onPress={() => this._click()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue'
    },
    text:{
        fontSize:30,
        color:'black'
    }
});