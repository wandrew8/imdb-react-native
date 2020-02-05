import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import SearchPage from './SearchPage';
import TopRated from './TopRated';

const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Search: { screen: SearchPage,  
            navigationOptions:{  
                tabBarLabel:'Search',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-search'}/>  
                    </View>),  
            }  
        },  
        Popular: { screen: TopRated,  
            navigationOptions:{  
                tabBarLabel:'Popular',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-film'}/>  
                    </View>),    
            }  
        },  
    },  
    {  
      initialRouteName: "Search",  
      activeColor: '#f0edf6',  
      barStyle: { backgroundColor: '#3BAD87' },  
    },  
);  
  
const Container = createAppContainer(TabNavigator); 

class Main extends React.Component {
    render() {
      return <Container />;
    }
  }

export default Main;