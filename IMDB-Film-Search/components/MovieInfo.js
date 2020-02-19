import React from 'react';
import { Text, ScrollView, Image, StyleSheet, View } from 'react-native';
import { Card, ListItem, Icon, Rating } from 'react-native-elements';
import { MOVIES } from '../shared/movies';

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

const addFavorite = () => {
    console.log('You added this to your favorites')
}

function RenderMovieCard({movie}) {
    const rating = (parseFloat(movie.imdbRating) / 2).toFixed(1);
    if(movie) {
        return (
            <ScrollView>
                    <Image
                        source={{uri: movie.Poster}}
                        style={{ width: '100%', height: 200, objectFit: 'cover', borderBottomWidth: 1, borderBottomColor: "#ebebeb", }}
                        />
                        <View style={{position: 'absolute', top: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)', padding: 10 }}>
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
                            <Text style={{fontSize: 12, color: 'white', textAlign: 'center'}}>{`Rating: ${rating} / 5`}</Text>
                        </View>
                        <View style={{position: 'absolute', top: 110, backgroundColor: 'rgba(0,0,0,0.5)', width: '100%' }}>
                            <Icon
                                name="comments"
                                type="font-awesome"
                                color='#f0edf6'
                                size={50}
                                iconStyle={{position: 'absolute', top: 15, right: 15,}}
                                onPress={() => addFavorite}
                                />
                            <Text style={styles.header}>{movie.Title}</Text>
                            <Text style={styles.caption}>Release Date: {movie.Released}</Text>
                        </View>
                <Card>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', borderBottomColor: '#e1e8ee', borderBottomWidth: 1, }}>
                        <View style={{width: '50%', paddingTop: 5, paddingBottom: 5, minHeight: 180, }}>
                            <Image
                                source={{ uri: movie.Poster }}
                                style={{ width: 150, height: '100%', objectFit: 'cover', marginBottom: 15, }}
                            />
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
                        bottomDivider
                    />
                    <ListItem
                        title="Cast"
                        subtitle={` ${movie.Actors.split(",").join("\n")}`}
                        bottomDivider
                    />
                    <ListItem
                        title="Critical Reception"
                        subtitle={`${movie.Awards === "N/A" ? "This film has recieved no awards" : movie.Awards }\n\nReviews\n${movie.Ratings[0] ? `${movie.Ratings[0].Source}: ${movie.Ratings[0].Value}` : ""}\n${movie.Ratings[1] ? `${movie.Ratings[1].Source}: ${movie.Ratings[1].Value}` : ""}\n${movie.Ratings[2] ? `${movie.Ratings[2].Source}: ${movie.Ratings[2].Value}` : ""}`}
                        bottomDivider
                    />

                </Card>
            </ScrollView>
        )
    }
    return <Text>Sorry, can't find this movie</Text>
}

class MovieInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: MOVIES,
        }
    }
    static navigationOptions = {
        title: 'Film Details',
    }
    render() {
        const movieId = this.props.navigation.getParam('movieId');
        const movie = this.state.movies.filter(movie => movie.imdbID === movieId)[0];
        return (
            <RenderMovieCard movie={movie} />
        )
    }
}


export default MovieInfo;