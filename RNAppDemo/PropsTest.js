import React, {Component} from  'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

export default class PropsTest extends Component{
    static defaultProps={
        describes:"我是默认描述",
        describes1:'我是默认描述1'
    }

    static propTypes={
        describes: PropTypes.string,
        describes1: PropTypes.string.isRequired
    }

    render(){
        return <Text> Props使用:{this.props.describes} {this.props.describes1}</Text>
    }
}