import React,{Component} from  'react';
import {Text} from  'react-native'

export  default  class  HelloComponet extends  Component{
    render() {
        return <Text> Hello React </Text>
    }
}

//创建组件的三种方式：ES5、ES6、函数

//ES5
// var HelloComponent = React.createElement({
//     render() {
//         return <Text> Hello React {this.props.name}</Text>
//     }
// })
// module.exports = HelloComponent;


//函数创建
// function HelloComponent() {
//     return <Text> Hello Component</Text>
// }
// module.exports = HelloComponent;