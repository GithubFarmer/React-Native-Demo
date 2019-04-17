
import React, { Component } from 'react';
import { AppRegistry, SectionList, View, Text, StyleSheet} from 'react-native';

class RNDemo extends Component {
  render(){
    return (
            <View style={styles.container}>
            <SectionList
            sections={[
                       {title:'D',data:['Day','Devin']},
                       {title:'J',data:['Jackson','James','Jillian','Joel','John','Julie','Jenny','Job','Jim']},
                       {title:'D',data:['Day','Devin']},
                       {title:'J',data:['Jackson','James','Jillian','Joel','John','Julie','Jenny','Job','Jim']},
                       {title:'D',data:['Day','Devin']},
                       {title:'J',data:['Jackson','James','Jillian','Joel','John','Julie','Jenny','Job','Jim']},
                       {title:'D',data:['Day','Devin']},
                       {title:'J',data:['Jackson','James','Jillian','Joel','John','Julie','Jenny','Job','Jim']},
                       {title:'D',data:['Day','Devin']},
                       {title:'J',data:['Jackson','James','Jillian','Joel','John','Julie','Jenny','Job','Jim']},
                       {title:'D',data:['Day','Devin']},
                       {title:'J',data:['Jackson','James','Jillian','Joel','John','Julie','Jenny','Job','Jim']}]}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item,index) => index}
            ></SectionList>
            </View>
    );
  }
}

const styles = StyleSheet.create({
                                 container:{
                                 flex:1,
                                 paddingTop:22
                                 },
                                 sectionHeader:{
                                 paddingTop:2,
                                 paddingLeft:10,
                                 paddingRight:10,
                                 paddingBottom:2,
                                 fontSize:14,
                                 fontWeight:'bold',
                                 backgroundColor:'rgba(247,247,247,1.0)'
                                 },
                                 item:{
                                 padding:10,
                                 fontSize:18,
                                 height:44,
                                 color:'red'
                                 }
});

AppRegistry.registerComponent('RNDemo', () => RNDemo);



