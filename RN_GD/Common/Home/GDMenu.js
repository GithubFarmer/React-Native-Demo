import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity, Platform, Image} from "react-native";

const  {width, height} = Dimensions.get('window');

import PropTypes from  'prop-types';


export  default  class GDMenu extends Component{


    static  defaultProps = {
        removeModal:{},//销毁模态回调
        loadSiftData:{} //筛选菜单回调
    }

    static  propTypes = {
        data: PropTypes.array(),
    }

    constructor(props) {
        super(props);
        this.state = {


        }
    }


}