import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';



export default class Detail1 extends Component<props>{
    static  navigationOptions = {
        title : "Welcome to Detail11!!!"
    }
    constructor(props) {
        super(props);
    }
    _backAction(){
        this.props.navigation.popToTop();
    }

    render(){
        const {navigation} = this.props;
        const  itemId = navigation.getParam('itemId','1223');
        const  name = navigation.getParam('name','fdafa');
        const  cardId = navigation.getParam('cardId','1234');
        const  cardName = navigation.getParam('cardName','ABC');
        return (
            <View style={styles.container}>
                <Text style={styles.text}>首页:{JSON.stringify(itemId)}==={JSON.stringify(name)}</Text>
                <Text style={styles.text1}>Next:{cardId}:{cardName}</Text>
                <Button title={"返回"} onPress={() => this._backAction()}/>
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
    },
    text1:{
        fontSize:40,
        color:'white'
    }
});