import React from 'react';
import { View, Text, StyleSheet, Button, Image, Alert, Keyboard, ScrollView } from 'react-native';
import { Input, Card, ListItem } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import RenderResults from './RenderResults';
import { FEATURED } from '../shared/featured'
  
const styles = StyleSheet.create({
    text: {
      color: '#444',
      textAlign: 'center',
      fontSize: 30,
      marginBottom: 30,
      fontWeight: '300',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        shadowColor: '#444',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 1,
        paddingTop: 40,
        paddingBottom: 40,
      },
  })

class SearchPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            isLoading: false,
            searchMovie: false,
            featured: FEATURED,
         }
    }

    static navigationOptions = {
        title: 'Search Films',
    }

    updateSearch = search => {
        this.setState({ search });
    }

    _renderItem ({item, index}) {
        return (
            <Card 
                style={{marginBottom: 10 }}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                    <View style={{width: '40%', paddingTop: 5, minHeight: 180, }}>
                        <Image
                            source={{ uri: item.Poster }}
                            style={{ width: '100%', height: '100%', marginBottom: 15, }}/>
                    </View>
                    <View style={{width: '60%' }}>
                        <Text style={{fontSize: 20, textAlign: 'center'}}>{item.Title.toUpperCase()}</Text>
                        <ListItem
                            style={{paddingTop: 5, paddingBottom: 5 }}
                            title="Film Details"
                            subtitle={`Year:  ${item.Year}\nRated:  ${item.Rated}\nReleased:  ${item.Released}\nLanguage:  ${item.Language}\nRuntime:  ${item.Runtime}\nCountry:  ${item.Country}`}/>
                        <View style={{width: '70%', justifyContent: 'center', textAlign: 'center', marginLeft: 40, marginRight: 40,}}>
                            <Button 
                                title="MORE DETAILS" 
                                type="outline"
                                style={{position: 'absolute', bottom: 10}}
                                onPress={() => navigate('SearchedFilm', {movie: item})}/>
                        </View>
                    </View>
                </View>
            </Card>
        );
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
        return (
            <ScrollView>    
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <Text style={styles.text}>SEARCH FILMS</Text>
                    <View style={{ width: '90%' }}>
                        <Input
                            inputContainerStyle={{marginBottom: 20}}
                            leftIcon={{type: 'font-awesome', name: 'search' }}
                            placeholder='  Search by film title...'
                            onChangeText={(search)=>this.setState({search: search})}
                            value={this.state.search} />
                    </View>
                    <View style={{ width: 200, justifyContent: 'center', alignItems: 'center' }}>
                        <Button
                            title='Search'
                            type="outline"
                            color='#3BAD87'
                            raised
                            onPress={() => this.handleSearch()}/>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <RenderResults navigate={navigate} searchMovie={this.state.searchMovie} isLoading={this.state.isLoading} movie={this.state.data}/>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.featured}
                        renderItem={this._renderItem}
                        sliderWidth={400}
                        itemWidth={400}
                        />
                </View>
            </View>
            </ScrollView>
        )
    }
}

export default SearchPage;