import React from 'react';
import {
  AppRegistry,
  View,
  Text,
  Button,
  Image
} from 'react-native';
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  StackActions,
  NavigationActions
} from 'react-navigation';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return ( <
      View style = {
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }
      } >
      <
      Text > Home Screen < /Text> <
      Button title = "Go to Details"

      //            onPress={() => {
      //            this.props.navigation.dispatch(StackActions.reset({
      //                                                              index: 0,
      //                                                              actions: [
      //                                                                        NavigationActions.navigate({ routeName: 'Details' })
      //                                                                        ],
      //                                                              }))
      //            }}
      //            />

      onPress = {
        () => this.props.navigation.navigate('Details')
      }
      /> < /
      View >
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({
    navigation
  }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };
  render() {
    return ( <
      View style = {
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red'
        }
      } >
      <
      Text > Details Screen < /Text> <
      Button title = "Go to Details ..... again"
      onPress = {
        () => this.props.navigation.push('Details')
      }
      />

      <
      Button title = "Go Back!!!"
      onPress = {
        () => this.props.navigation.goBack()
      }
      />

      <
      Button title = "Go Home!!!"
      onPress = {
        () => this.props.navigation.navigate('Home')
      }
      /> < /
      View >
    );
  }
}

class LogoTitle extends React.Component {
  render() {
    return ( <
      Image source = {
        require('./ios/hello1.png')
      }
      style = {
        {
          width: 30,
          height: 30
        }
      }
      />
    );
  }
}

//自定义titleView

class DetailsScreenA extends React.Component {
  static navigationOptions = {
    headerTitle: < LogoTitle / > ,
    headerRight: ( <
      Button onPress = {
        () => alert('This is a button!')
      }
      title = "info"
      color = "#456" /
      >
    ),
  };
  render() {
    return ( <
      View style = {
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'yellow'
        }
      } >
      <
      Text > DetailsScreenA Screen < /Text> <
      Button title = "Go to Details ..... again"
      onPress = {
        () => this.props.navigation.push('DetailsScreenB')
      }
      />

      <
      Button title = "Go Back!!!"
      onPress = {
        () => this.props.navigation.goBack()
      }
      />

      <
      /View>
    );
  }
}

class DetailsScreenB extends React.Component {
  static navigationOptions = ({
    navigation
  }) => {
    return {
      headerTitle: < LogoTitle / > ,
      headerRight: ( <
        Button onPress = {
          navigation.getParam('increaseCount')
        }
        title = "+1"
        color = "red" /
        >
      )
    }
  };

  componentDidMount() {
    this.props.navigation.setParams({
      increaseCount: this._increaseCount
    });
  }

  state = {
    count: 0
  };

  _increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return ( <
      View style = {
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'green'
        }
      } >
      <
      Text > DetailsScreenB Screen < /Text> <
      Button title = "Go to DetailsScreenB ..... again"
      onPress = {
        () => this.props.navigation.push('DetailsScreenB')
      }
      />

      <
      Button title = "Go Back!!!"
      onPress = {
        () => this.props.navigation.goBack()
      }
      />

      <
      Button title = "Go Home!!!"
      onPress = {
        () => this.props.navigation.navigate('DetailsScreenA')
      }
      /> < /
      View >
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
  initialRouteName: 'Home',
});

//const AppContainer = createAppContainer(AppNavigator)

//创建一个TabNavigator

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f56'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },

  navigationOptions: {
    tabBarLabel: 'Home!',
  }
})

const DetailStack = createStackNavigator({
  DetailsScreenA: DetailsScreenA,
  DetailsScreenB: DetailsScreenB
})

const Tabnavigator = createBottomTabNavigator({
  Home: HomeStack,
  Settings: DetailStack
})

const AppContainer = createAppContainer(Tabnavigator)

export default class App extends React.Component {

  someEvent() {
    this.navigator && this.navigator.dispatch(
      NavigationActions.navigate({
        routeName: someRouteName
      })
    );
  }

  render() {
    return ( < AppContainer ref = {
        nav => {
          this.navigator = nav;
        }
      }
      />
    );
  }
}

AppRegistry.registerComponent('RNDemo', () => App);