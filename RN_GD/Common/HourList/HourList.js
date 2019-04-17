import React,{Component} from 'react';
import { StyleSheet,Text, View, Dimensions,Image, ScrollView} from 'react-native';
import Detail from '../DetailTest';

const {width, height} = Dimensions.get('window');

export  default class Me extends Component{

    render() {
        return <View style={styles.container}>

            <View style={styles.topView}>

                <Text style={styles.text}
                      onPress={() => this.props.navigator.push({
                          component:Detail
                      })}
                >小时风云榜</Text>
                <Image source={{uri:'AppIcon'}} style={styles.image}
                />
            </View>
            <ScrollView>
                {this.renderChildView()}
            </ScrollView>
        </View>
    }

    renderChildView() {
        var allChild = [];
        var colors = ['red', 'green', 'blue', 'yellow', 'purple'];
        for(var i = 0; i < colors.length; i++){
            allChild.push(
                <View key={i} style={{backgroundColor:colors[i], width:width, height:120, flexDirection:'row'}}>
                    <Image source={{uri:'AppIcon'}} style={styles.cellImage}/>
                    <Text style={{flex:1,fontSize:20,marginLeft:10, marginTop:50}}>{colors[i]}</Text>
                </View>
            );
        }
        return allChild;
    }

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1
    },
    text:{
        textAlign: 'center',
        justifyContent:'center',
        marginTop:80,
        color:'red'
    },
    topView:{
        backgroundColor: 'yellow',
        width:width,
        height:200
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginTop:3,
        marginLeft:width/2-35,
    },
    cellImage:{
        width:70,
        height:70,
        borderRadius:35,
        marginTop:25,
        marginLeft:15,
    }
});