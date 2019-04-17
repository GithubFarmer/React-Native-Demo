import React,{Component} from 'react';
import { StyleSheet,Text, View, DeviceEventEmitter, TouchableOpacity, Image} from 'react-native';

import NaviBar from './Home/HomeNaviBar';

export  default class Me extends Component{

    back() {
        return <TouchableOpacity
        onPress = {() => this.props.navigator.pop()}
        >
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Image source={{uri:'back'}}
                        style={styles.leftItem}
                />
                <Text>返回</Text>

            </View>
        </TouchableOpacity>
    }

    titleAction() {
        return <Text style={styles.titleItem}> 详情界面 </Text>
    }

    render() {
        return <View style={styles.container}>
            <NaviBar
            leftItem={() => this.back()}
            titleItem={() => this.titleAction()}
            />
            <Text style={styles.text}>详情界面</Text>
        </View>
    }

    // 准备加载组件
    componentWillMount() {
        // 发送通知
        DeviceEventEmitter.emit('isHiddenTabBar', true);
    }

    // 准备销毁组件
    componentWillUnmount() {
        // 发送通知
        DeviceEventEmitter.emit('isHiddenTabBar', false);
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
    },
    leftItem:{
        width:20,
        height: 20,
        marginLeft:15
    },
    titleItem:{
        fontSize:20,
        color:'black',
        marginRight:50
    }
});