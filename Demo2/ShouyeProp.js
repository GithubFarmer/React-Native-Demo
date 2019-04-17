
import React, { Component } from 'react';
import {Text} from "react-native";
import PropTypes from "prop-types";

export  default  class  ShouyeProp extends Component{

    static  defaultProps = {
        age : 24,
        name : "AA"
    }

    static propTypes = {
        age : PropTypes.int,
        name : PropTypes.string.isRequired,
    }

    render() {
        return <Text> 姓名:{this.props.name} 年龄：{this.props.age} </Text>;
    }
}