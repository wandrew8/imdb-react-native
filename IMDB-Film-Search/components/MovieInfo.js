import React from 'react';
import { Text, ScrollView, Image } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { MOVIES } from '../shared/movies';

function RenderMovieCard({movie}) {
    if(movie) {
        return (
            <ScrollView>
                <Card
                    title={movie.Title}>
                    <Image
                        source={{ uri: movie.Poster }}
                        style={{ width: 150, height: 225, marginBottom: 15, }}
                    />
                    <ListItem
                        title="Plot and Summary"
                        subtitle={`${movie.Plot}\n\nDirector:  ${movie.Director}Genre:  ${movie.Genre}\nReleased by ${movie.Production}`}
                        bottomDivider
                        topDivider
                    />
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