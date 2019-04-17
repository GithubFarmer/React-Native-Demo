
import React, { Component } from 'react';
import { AppRegistry, FlatList, View, Text, StyleSheet} from 'react-native';

class RNDemo extends Component {
  render(){
    return (
            <View style={styles.container}>
            <FlatList
            data={[{key:'json'},{key:'James'},{key:'Bob'},{key:'Jay'},{key:'Fob'},{key:'Kim'},{key:'Nyd'}]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            ></FlatList>
            </View>
    );
  }
}

const styles = StyleSheet.create({
                                 container:{
                                 flex:1,
                                 paddingTop:22
                                 },
                                 item:{
                                 padding:10,
                                 fontSize:18,
                                 height:44,
                                 color:'red'
                                 }
});

AppRegistry.registerComponent('RNDemo', () => RNDemo);



