import React,{Component} from 'react';
import { StyleSheet,FlatList,Text, View, Image, Dimensions, DeviceEventEmitter, InteractionManager, Modal, Navigator, TouchableOpacity} from 'react-native';
//创建导航
import NaviBar from './HomeNaviBar';
import Colors from '../Colors';

import DetailTest from '../DetailTest'

// 获取屏幕尺寸
const {width, height} = Dimensions.get('window');

let REQUET_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export  default class Me extends Component{

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            data:[]
        };
        this.fetchData = this.fetchData.bind(this);
    }

    pushHalfHour() {
        InteractionManager.runAfterInteractions(() => {
             this.props.navigator.push({
              component:DetailTest,
             });
        });
    }

    renderLeft() {
        return <TouchableOpacity
            onPress = {() => this.pushHalfHour()}
        >
            <Image source={{uri:'hot_icon_20x20'}} style={styles.navBarLeft} />
        </TouchableOpacity>
    }

    showSwiftMenu() {

    }

    renderTitle() {
        return <TouchableOpacity
            onPress = {() => this.showSwiftMenu()}
        >
        <Image source={{uri: 'navtitle_home_down_66x20'}} style={styles.navBarTitle} />
        </TouchableOpacity>
    }

    pushSearch() {

    }

    renderRight() {
        return <TouchableOpacity
            onPress = {() => this.pushSearch()}
        >
            <Image source={{uri: 'search_icon_20x20'}} style={styles.navBarRight} />
        </TouchableOpacity>
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData() {
        fetch(REQUET_URL)
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    data:this.state.data.concat(responseData.movies),
                    loaded:true
                });
            });
    }

    renderMovie({item}){
        //{item}是一种“解构”写法，请阅读ES2015语法的相关文档
        //item也是FlatList中固定的参数名，请阅读FlatList的相关文档
        return (
            <View style={styles.container1}>
                <Image source={{uri:item.posters.thumbnail}}
                       style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.year}>{item.year}</Text>
                </View>
            </View>
        );
    }

    showDataView() {
        return
        <FlatList
            data = {this.state.data}
            renderItem={this.renderMovie}
            style={styles.list}
            keyExtractor={item => item.id}
        >
        </FlatList>
    }

    noDataView() {
        return <View style={styles.listView}>
            <Text> 暂无数据 </Text>
        </View>
    }

    render() {
        return <View style={styles.container}>
         <NaviBar
         leftItem={() => this.renderLeft()}
         titleItem={() => this.renderTitle()}
         rightItem={() => this.renderRight()}
         />
            <FlatList
                data = {this.state.data}
                renderItem={this.renderMovie}
                style={styles.list}
                keyExtractor={item => item.id}
            >
            </FlatList>

        </View>
    }

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.primary,
        alignItems:'center',
        flex:1
    },
    navBarLeft:{
        width: 20,
        height: 20,
        marginLeft:15
    },
    navBarTitle:{
        width:66,
        height:20
    },
    navBarRight:{
        width:20,
        height:20,
        marginRight:15
    },
    listViewStyle:{
      width:width
    },
    text:{
        textAlign: 'center',
        justifyContent:'center',
        marginTop:100
    },
    Image:{
        height:40,
        width:30,
        paddingTop:100
    },
    title:{
        fontSize:20,
        marginBottom:8,
        textAlign:"center",
        marginLeft:30
    },
    year:{
        textAlign:"center"
    },
    thumbnail:{
        marginLeft:5,
        marginTop:5,
        width:53,
        height:81
    },
    list:{
        paddingTop:5,
        backgroundColor:"#F5FCFF",
        width:width
    },
    container1:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#F5FCFF"
    },
    rightContainer:{
        flex:1,
    },
});