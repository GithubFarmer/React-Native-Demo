import React, {Component} from 'react';
import {TouchableWithoutFeedback,TouchableOpacity, StyleSheet, View, Text, Alert} from "react-native";

export default class TouchableTest extends Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    render() {
        return <View>

            <TouchableWithoutFeedback
                onPressIn={() => {console.log('onPressIn')}}
                onPressOut={() => {console.log('onPressOut')}}
                onPress={() =>{
                    console.log('onPress')
                    this.setState({count:this.state.count + 1})
                }}
                onLongPress={() => {
                    console.log('onLongPress')
                    Alert.alert('提示','确认删除吗？',[
                        {text:'取消',onPress:() => {},style:'cancel'},{
                        text:'确定',onPress:()=>{},style:'cancel'
                    }
                    ])
                }}
            >
                <View style={styles.button}>
                    <Text> 我是TouchableWithoutFeedback，点击我{this.state.count}</Text>
                </View>
            </TouchableWithoutFeedback>

        </View>
    }

}

const styles = StyleSheet.create({
    button:{
        borderWidth:1,
        borderColor:'blue',
        // borderTopRightRadius:5,
        // borderBottomRightRadius:5,
        // borderTopLeftRadius:5,
        borderRadius:3,
        backgroundColor:'red',
    }
})