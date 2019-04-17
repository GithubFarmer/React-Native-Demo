import  React, {Component} from "react";
import  {View, Image, StyleSheet, Text, ImageBackground} from 'react-native';

export default  class ImageTest extends Component{
    //构造器
    constructor(props){
        super(props)
    }

    render(){
        return <View>
            <Image style={styles.image}
                   source={require('./Image/hello1.png')}
                   resizeMode={'stretch'}
            >

            </Image>

            {/*<ImageBackground style={styles.image}>*/}
                {/*<View style={styles.view}>  </View>*/}
            {/*</ImageBackground>*/}
        </View>
    }
}
const styles = StyleSheet.create({
    image:{
        backgroundColor:'#ddd',
        width:100,
        height:100,
        // tintColor: '#46B6F6'
    },
    view: {
        backgroundColor: 'red',
        width: 50,
        height: 50
    }
});