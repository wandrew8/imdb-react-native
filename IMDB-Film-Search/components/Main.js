import React from 'react';  
import { View } from 'react-native';  
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import SearchPage from './SearchPage';
import TopRated from './TopRated';
import MovieInfo from './MovieInfo';

const MovieNavigator = createStackNavigator(
    {
        "TopRated": { screen: TopRated },
        "MovieInfo": { screen: MovieInfo },
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#1B9CFC'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

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
        Popular: { screen: MovieNavigator,  
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