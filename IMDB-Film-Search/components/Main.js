// import React from 'react';
// import { Text } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

// class Screen1 extends React.Component {
//   static navigationOptions = {
//     tabBarIcon: ({ focused }) => (<Text style={focused ? {color: '#fff'} : {color: '#000'}}>Hi</Text>),
//     activeTintColor: '#fff',
//   };
//   render() {
//     return null;
//   }
// }
// class Screen2 extends React.Component {
//   static navigationOptions = {
//     tabBarIcon: ({ focused }) => (<Text style={focused ? {color: '#fff'} : {color: '#000'}}>Hi</Text>),
//     activeTintColor: 'red',
//   };
//   render() {
//     return null;
//   }
// }

// const MaterialBottomTabNavigator = createMaterialBottomTabNavigator(
//   {
//     <Tab.Screen name="Home" component={HomeScreen} />

//     Screen1: Screen1,
//     Screen2: Screen2,
//   },
//   {
//     shifting: true,
//   }
// );

// const Container = createAppContainer(MaterialBottomTabNavigator)

// export default class Main extends React.Component {
//   render() {
//     return <Container />;
//   }
// }

import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
class HomeScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Home Screen</Text>  
        </View>  
    );  
  }  
}  
class ProfileScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Profile Screen</Text>  
        </View>  
    );  
  }  
}  
class ImageScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Image Screen</Text>  
            </View>  
        );  
    }  
}  
class CartScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Cart Screen</Text>  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'  
    },  
});  
const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: HomeScreen,  
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                    </View>),  
            }  
        },  
        Profile: { screen: ProfileScreen,  
            navigationOptions:{  
                tabBarLabel:'Profile',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                    </View>),  
                activeColor: '#f60c0d',  
                inactiveColor: '#f65a22',  
                barStyle: { backgroundColor: '#f69b31' },  
            }  
        },  
        Image: { screen: ImageScreen,  
            navigationOptions:{  
                tabBarLabel:'History',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>  
                    </View>),  
                activeColor: '#615af6',  
                inactiveColor: '#46f6d7',  
                barStyle: { backgroundColor: '#67baf6' },  
            }  
        },  
        Cart: {  
            screen: CartScreen,  
            navigationOptions:{  
                tabBarLabel:'Cart',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'}/>  
                    </View>),  
            }  
        },  
    },  
    {  
      initialRouteName: "Home",  
      activeColor: '#f0edf6',  
      inactiveColor: '#226557',  
      barStyle: { backgroundColor: '#3BAD87' },  
    },  
);  
  
const Container = createAppContainer(TabNavigator); 

export default class Main extends React.Component {
    render() {
      return <Container />;
    }
  }