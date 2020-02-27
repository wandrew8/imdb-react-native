import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import { Text, ScrollView, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, ListItem, Rating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    header: {
        color: 'white', 
        fontSize: 30,
        textTransform: 'uppercase',
        padding: 10,
    },
    caption: {
        color: 'white',
        paddingBottom: 10,
        paddingLeft: 10,
    }
})

class SearchedFilm extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        title: 'Search Results',
    }

    render() {
        const movie = this.props.navigation.getParam('movie')
        const rating = (parseFloat(movie.imdbRating) / 2).toFixed(1);

        return (
            <ScrollView>
                    <Animatable.Image
                        animation="fadeIn"
                        duration={2000}
                        source={{uri: movie.Poster}}
                        style={{ width: '100%', height: 200, objectFit: 'cover', borderBottomWidth: 1, borderBottomColor: "#ebebeb", }}/>
                    <Animatable.View animation="slideInRight" style={{position: 'absolute', top: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)', padding: 10 }}>
                        <Rating
                            type='custom'
                            tintColor='black'
                            ratingBackgroundColor='black'
                            readonly
                            fraction="{1}"
                            imageSize={40}
                            style={{opacity: 0.9}}
                            startingValue={rating}
                            />
                        <Text style={{fontSize: 12, color: 'white', textAlign: 'center'}}>{`IMDB Rating: ${rating} / 5`}</Text>
                    </Animatable.View>
                    <View
                        style={{position: 'absolute', top: 110, backgroundColor: 'rgba(0,0,0,0.5)', width: '100%' }}>
                        <Animatable.View animation="slideInLeft">
                            <Text style={styles.header}>{movie.Title}</Text>
                            <Text style={styles.caption}>Release Date: {movie.Released}</Text>
                        </Animatable.View>
                    </View>
                    <Animatable.View animation="slideInUp">
                        <Card style={{marginBottom: 10}}>
                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', borderBottomColor: '#e1e8ee', borderBottomWidth: 1, }}>
                                <View style={{width: '50%', paddingTop: 5, paddingBottom: 5, minHeight: 180, }}>
                                    <Image
                                        source={{ uri: movie.Poster }}
                                        style={{ width: 150, height: '100%', objectFit: 'cover', marginBottom: 15, }}/>
                                </View>
                                <View style={{width: '50%', paddingTop: 5, paddingBottom: 5, minHeight: 180, }}>
                                    <ListItem
                                        style={{paddingTop: 5, paddingBottom: 30 }}
                                        title="Plot and Summary"
                                        subtitle={movie.Plot}/>
                                </View>
                            </View>
                            <ListItem
                                title="Details"
                                subtitle={`Year:  ${movie.Year}\nRated:  ${movie.Rated}\nReleased:  ${movie.Released}\nLanguage:  ${movie.Language}\nRuntime:  ${movie.Runtime}\nCountry:  ${movie.Country}`}
                                bottomDivider/>
                            <ListItem
                                title="Cast"
                                subtitle={` ${movie.Actors.split(",").join("\n")}`}
                                bottomDivider/>
                            <ListItem
                                title="Critical Reception"
                                subtitle={`${movie.Awards === "N/A" ? "This film has recieved no awards" : movie.Awards }\n\nReviews\n${movie.Ratings[0] ? `${movie.Ratings[0].Source}: ${movie.Ratings[0].Value}` : ""}\n${movie.Ratings[1] ? `${movie.Ratings[1].Source}: ${movie.Ratings[1].Value}` : ""}\n${movie.Ratings[2] ? `${movie.Ratings[2].Source}: ${movie.Ratings[2].Value}` : ""}`}/>
                        </Card>
                    </Animatable.View>
                </ScrollView>
        )
    }
}

export default SearchedFilm;
