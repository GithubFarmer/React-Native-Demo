
import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, FlatList, Text, Image} from 'react-native';
var REQUET_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

class RNDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
    data:[],
    loaded:false
    };
    //在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
    //像下面这行代码一样，在construction中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this);
  }
  
  //React生命周期的运行方法
  componentDidMount() {
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
          console(responseData);
          });
  }
  render(){
    if(!this.state.loaded){
      return this.renderLoadingView();
    }
    return (
    <FlatList
            data={this.state.data}
            renderItem={this.renderMovie}
            style={styles.list}
            keyExtractor={item => item.id}
            ></FlatList>
    );
  }
  
  renderLoadingView() {
    return(
           <View style={styles.container}>
           <Text>Loading movies</Text>
           </View>
    );
  }
  
  renderMovie({item}){
    //{item}是一种“解构”写法，请阅读ES2015语法的相关文档
    //item也是FlatList中固定的参数名，请阅读FlatList的相关文档
    return (
            <View style={styles.container}>
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
}

const styles = StyleSheet.create({
                                 container:{
                                 flex:1,
                                 flexDirection:"row",
                                 justifyContent:"center",
                                 alignItems:"center",
                                 backgroundColor:"#F5FCFF"
                                 },
                                 rightContainer:{
                                 flex:1,
//                                 backgroundColor:'#2196F3'
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
                                 paddingTop:20,
                                 backgroundColor:"#F5FCFF"
                                 }
})

AppRegistry.registerComponent('RNDemo', () => RNDemo);



