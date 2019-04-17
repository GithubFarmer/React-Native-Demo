import React,{Component} from  'react';
import {Text} from  'react-native';

export  default class StateTest extends Component{
    state={
        count:1
    }
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    getCount(){
        return this.state.count
    }
    render(){
        return <Text
                    onPress={() =>{this.setState({count:this.state.count + 1})
                    }
                    }
        >点击测试state：{this.state.count}</Text>
    }
}