import React,{Component} from 'react';
import {StyleSheet,Text, View, ImageBackground} from 'react-native';
import HelloComponet from './HelloComponet';
import LifeCycleComponent from './LifeCycleComponent';
import PropsTest from './PropsTest';
import StateTest from './StateTest';
import Students from './Students';
import ImageTest from './ImageTest';
import TouchableTest from './TouchableTest';
import CustomButton from './Com/CustomButton';
import {Actions} from "react-native-router-flux";

export const title = "HelloReactNative";
export const  description = "简单使用";
export default class HelloReactNative extends Component{
    constructor(props){
        super(props);
        this.state = {
            remove:false,
            count:0,
            refCount:0
        }
        this.stu = new Students('小王','26','男');
    }

    _buttonClick () {
        Actions.push('ImageTest');
    }

    render() {
        // var view = <LifeCycleComponent/>
        var text = this.state.remove ? "模拟组件装载" : "模拟组件卸载"
        var params = {descriptions:'我是属性描述', descriptions1:'我是属性1'}
        return (
            <View
                style={styles.container}
            >
                <HelloComponet  name={'PROPS'}/>
                <View style={{marginTop:20, marginBottom: 20}}>
                    <Text> 组件的生命周期学习</Text>
                    <Text
                        onPress={() => {
                            this.setState({remove:!this.state.remove})
                        }}
                    >{text}</Text>
                    <Text onPress={() => {this.setState({count:Math.floor(Math.random()*10)})}}>设置默认值</Text>
                    {/*{view}*/}
                </View>
                <PropsTest
                    describes={params.descriptions}
                    describes1={params.descriptions1}
                />
                <StateTest/>
                <Text>{this.stu.getDescrption()}</Text>
                <TouchableTest/>
                <ImageTest/>
                <CustomButton
                    text="确定"
                    buttonColor="red"
                    buttonRadius={20}
                    buttonType="normal"
                    textStyle={styles.textStyle}
                    style={styles.button}
                    selectedColor="green"
                    disableColor="yellow"
                    onPress={() =>this._buttonClick()}
                />
                <CustomButton
                    text="确定"
                    buttonColor="red"
                    buttonRadius={20}
                    buttonType="stroke"
                    textStyle={styles.textStyle}
                    style={styles.button}
                    // selectedColor="green"
                    disableColor="yellow"
                    onPress={() =>this._buttonClick()}
                />
                <CustomButton
                    text="确定"
                    buttonColor="red"
                    buttonRadius={20}
                    buttonType="text"
                    textStyle={styles.textStyle}
                    selectedColor="green"
                    disableColor="yellow"
                    style = {styles.button}
                    style={{marginTop:20}}
                />

                <View
                style={styles.button}>
                    <View style={styles.button1}></View>
                    <View style={styles.button2}><Text style={styles.text}> AAAAA </Text></View>
                </View>
                <Text style={styles.text1}> AAAAA </Text>
                <ImageBackground
                    style={styles.button}
                    source={require('./Image/hello1.png')}
                >
                    <Text style={styles.text1}>123456</Text>
                </ImageBackground>
            </View>
        );
    }
}

const  styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    welcome:{
        fontSize:20,
        textAlign: 'center',
        margin:10
    },
    intructions:{
        textAlign: 'center',
        color:'yellow',
        marginBottom:5,
        flexWrap:'nowrap'
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        width: 150,
        height: 40,
        backgroundColor:'red',
        marginTop: 20
    },
    button1: {
        width: 150,
        height: 10,
        marginTop: 3,
        backgroundColor:'blue'
    },
    button2: {
        width: 150,
        height: 20,
        marginTop: 3,
        backgroundColor:'gray'
    },
    text:{
        fontSize:15,
        textAlign: 'center',
        justifyContent:'center',
        flex:1,
        color: 'black'
    },
    text1:{
        fontSize:35,
        textAlign: 'center',
        justifyContent:'center',
        color: 'gray'
    },
});