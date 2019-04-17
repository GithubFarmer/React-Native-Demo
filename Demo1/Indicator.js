import  React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View, Button, TextInput} from 'react-native';

// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//     android:
//         'Double tap R on your keyboard to reload,\n' +
//         'Shake or press menu button for dev menu',
// });


export default class Indicator extends Component {

    _click(){

    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator  size={'large'} color={'red'} animating={'true'}/>
                <ActivityIndicator size={'small'} color={'blue'}/>
                <Text>I Love You</Text>
                <Button onPress={this._click()} title={'点我啊'}> </Button>
                <TextInput ></TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: 'blue',
        marginBottom: 5,
    },
});
