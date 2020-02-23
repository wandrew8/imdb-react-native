import React from 'react';
import { View, Text, StyleSheet, Image, Alert, ImageBackground, Keyboard, ScrollView } from 'react-native';
import { Input, Card, Icon, Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import RenderResults from './RenderResults';
import { DRAMA } from '../shared/drama';
import { ANIMATED } from '../shared/animated';
import { ACTION } from '../shared/action';
import { COMEDY } from '../shared/comedy';
  
const styles = StyleSheet.create({
    text: {
      color: '#747d8c',
      textAlign: 'center',
      fontSize: 30,
      marginBottom: 20,
      fontWeight: '300',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        shadowColor: '#444',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 1,
    },
    genre: {
        textAlign: 'center',
        fontSize: 25,
        textTransform: 'uppercase',
        color: 'white',
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: 'rgba(0,0,0,0.2)',

    }
  })

class SearchPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            isLoading: false,
            searchMovie: false,
            searchOpen: false,
            action: ACTION,
            comedy: COMEDY,
            drama: DRAMA,
            animated: ANIMATED,
         }
    }

    static navigationOptions = {
        title: 'Search Films',
    }

    updateSearch = search => {
        this.setState({ search });
    }

    
    handleSearch = () => {
        if (!this.state.search) {
            return (
                Alert.alert(
                    'Oops!',
                    'Please enter the name of a film',
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    {cancelable: false},
                )
            )
        } else {
            this.setState({ isLoading: true, searchMovie: true })
            fetch('https://www.omdbapi.com/?apikey=2488b5dd&t=' + this.state.search)
            .then(response => response.json())
            .then(responseJson => {
                console.log(JSON.stringify(responseJson))
                this.setState(
                {
                    isLoading: false,
                    data: responseJson,
                });
                console.log(this.state)
            })
            .catch(error => {
                console.error(error);
            });
            console.log(this.state)
            Keyboard.dismiss();
            this.setState({ search: '' })
        }
    }


    render() {
        const { navigate } = this.props.navigation;
        const _renderItem = ({item}) => {
            return (
                <Card>
                    <View style={{flexDirection: 'row', }}>
                        <View style={{width: '100%', height: 240, margin: 0, padding: 0, }}>
                            <Image
                                source={{ uri: item.Poster }}
                                style={{ width: '100%', height: 200, margin: 0, }}/>
                            <Button 
                                    title="MORE DETAILS" 
                                    style={{position: 'absolute', bottom: 10}}
                                    onPress={() => {
                                        console.log(item)
                                        console.log(navigate)
                                        navigate('SearchedFilm', {movie: item})}}/>
                        </View>
                    </View>
                </Card>
            );
        }
    
        return (
            <ScrollView>    
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <ImageBackground
                        style={{ paddingTop: 40, paddingBottom: 30, width: '100%', opactiy: 0.1, height: 250}}
                        source={require('../assets/film.gif')}>
                    <Text style={styles.text}>SEARCH FILMS</Text>
                    <View style={{ width: '100%', paddingRight: 20, paddingLeft: 20, }}>
                        <Input
                            inputContainerStyle={{marginBottom: 20}}
                            leftIcon={{type: 'font-awesome', name: 'search', width: 50}}
                            placeholder='  Search by film title...'
                            onChangeText={(search)=>this.setState({search: search})}
                            value={this.state.search} />
                    </View>
                    <View style={{ width: '100%', justifyItems: 'center', alignItems: 'center' }}>
                        <Button
                            title='Search'
                            type="outline"
                            color='#3BAD87'
                            raised
                            onPress={() => this.handleSearch()}/>
                    </View>
                    </ImageBackground>
                </View>
                <View style={{flex: 1, marginBottom: 30}}>
                    <RenderResults navigate={navigate} searchMovie={this.state.searchMovie} isLoading={this.state.isLoading} movie={this.state.data}/>
                    <Text style={styles.genre}>Top Action Films</Text>
                    <View style={{margin: 0, justifyContent: 'center' }}>
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={this.state.action}
                            renderItem={(item) => _renderItem(item, navigate)}
                            sliderWidth={440}
                            itemWidth={220}
                            firstItem={2}/>
                        </View>
                        <Text style={styles.genre}>Top Comedy Films</Text>
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={this.state.comedy}
                            renderItem={_renderItem}
                            sliderWidth={440}
                            itemWidth={220}
                            firstItem={2}/>
                        <Text style={styles.genre}>Top Animated Films</Text>
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={this.state.animated}
                            renderItem={_renderItem}
                            sliderWidth={440}
                            itemWidth={220}
                            firstItem={2}/>
                        <Text style={styles.genre}>Top Drama Films</Text>
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={this.state.drama}
                            renderItem={_renderItem}
                            sliderWidth={440}
                            itemWidth={220}
                            firstItem={2}/>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default SearchPage;