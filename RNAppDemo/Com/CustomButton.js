import  React, {Component} from  'react';
import {TouchableHighlight, TouchableOpacity, StyleSheet, Text, Image, View, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';

export default class  CustomButton extends Component{
    constructor(props){
        super(props);
        this._onPress = this._onPress.bind(this);
        this._disable = this._disable.bind(this);
        this._enable = this._enable.bind(this);
        this.state = {
            disable: false
        }
    }
    _onPress() {
        if (this.props.onPress) {

            // this.props.onPress(this._enable);
            // this._disable();
            this.props.onPress();
        }
    }

    _enable (){
        this.setState({
            disable: false
        });
    };

    _disable() {
        this.setState({
            disable: true
        });
    };

    render(){
        let {selectedColor, buttonColor, buttonRadius, buttonType, borderWidth, style} = this.props;
        let type = CustomButton._setDifferentButtonStyle(buttonColor,buttonRadius,buttonType,borderWidth);
        if(selectedColor){
            {
                return this._renderTouchableHighlight(selectedColor, type, style);
            }
        }else {
            {
                return this._renderTouchableOpacity(type, style);
            }
        }
    }

    _renderTouchableHighlight(selectedColor, type, style){
        return (
            <TouchableHighlight
                underlayColor={selectedColor}
                onPress={this._onPress}
                style={[styles.container, type, style, this.state.disable && {backgroundColor:this.props.disableColor}]}
                disabled={this.state.disable}
            >
                <Text style={this.props.textStyle}>{this.props.text}</Text>

            </TouchableHighlight>
        );
    }

    _renderTouchableOpacity(type, style) {
        return (
            <TouchableOpacity
            ref="touchableOpacity"
            onPress={this._onPress}
            style={[styles.container, type, style]}
            disabled={this.state.disable}
            >
                <Text style={this.props.textStyle}> {this.props.text} </Text>
            </TouchableOpacity>
        );
    }
    
    static _setDifferentButtonStyle(buttonColor, buttonRadius, buttonType, boderWidth) {
        if(buttonType == "normal"){
            return CustomButton._setDifferentStyle(buttonColor,buttonRadius,buttonColor,1);
        }else if (buttonType == 'stroke'){
            return CustomButton._setDifferentStyle('transparent',buttonRadius,buttonColor,boderWidth);
        } else  if(buttonType == 'text'){
            return CustomButton._setDifferentStyle('transparent',0,'transparent',1);
        }
    }
    
    static _setDifferentStyle(backgroundColor, borderRadius, borderColor, borderWidth) {
        return {
          backgroundColor:backgroundColor,
          borderColor:borderColor,
          borderWidth:borderWidth,
          borderRadius:borderRadius
        };
    }
}


CustomButton.propTypes = {

    text: PropTypes.string.isRequired,
    textStyle: Text.propTypes.style,
    buttonType:PropTypes.oneOf(['normal', 'stroke', 'text']).isRequired,
    selectedColor:PropTypes.string,
    onPress:PropTypes.func,
    buttonColor:PropTypes.string,
    buttonRadius:PropTypes.number,
    borderWidth:PropTypes.number,
}

CustomButton.defaultProps = {
    borderWidth:1
}

const  styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden'
    }
});