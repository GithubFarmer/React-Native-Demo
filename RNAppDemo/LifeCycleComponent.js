import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class LifeCycleComponent extends Component{
    static defaultProps = {
        count:5
    }
    constructor(props){
        super(props)
        this.state = {
            count:this.props.count,
        }
        console.log('constructor')
    }
    componentWillMount(): void {
        console.log('组件被装载之前')
    }
    componentDidMount(): void {
        console.log('组件被装载完成')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('组件是不是更新，返回值true：表示执行刷新，即执行componentWillUpdate，render，compentDidUpdate。返回false，则不执行后续操作')
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('组件更新之前');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('组件更新之后')
    }
    componentWillUnmount(): void {
        console.log('组件被移除之前')
    }
    render(){
        console.log('render');
        return <View style={styles.container}>
            <Text style={styles.reduce} onPress={this.reduce()}>-</Text>
            <Text style={styles.text} >{this.state.count}</Text>
            <Text style={styles.add} onPress={this.add()}>+</Text>
        </View>
    }

    reduce = () =>{
        this.setState({count:this.state.count > 1 ? this.state.count - 1 : 0})
    }
    add = () => {
        this.setState({count:this.state.count + 1})
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:20,
        marginBottom:20
    },
    reduce:{
        width:50,
        height:40,
        borderWidth:1,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderColor:'#ccc',
        borderBottomLeftRadius:5,
        borderTopLeftRadius:5,
    },
    text:{
        width: 50,
        height: 40,
        borderTopWidth:1,
        borderBottomWidth:1,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderColor:'#ccc'
    },
    add:{
        width:50,
        height:40,
        borderWidth: 1,
        textAlign:'center',
        textAlignVertical:'center',
        borderColor: '#ccc',
        borderBottomRightRadius:5,
        borderTopRightRadius:5
    }

});