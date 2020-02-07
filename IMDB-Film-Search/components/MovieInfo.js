import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { MOVIES } from '../shared/movies';

const renderMovieDetails = ({item}) => {
    return (
        <ListItem>
            <Text>{item.Title}</Text>
            <Text>{item.Year}</Text>
            <Text>{item.Title}</Text>
            <Text>{item.Title}</Text>

        </ListItem>
    )
}

function RenderMovieCard({movie}) {
    if(movie) {
        return (
            <Card
                title={movie.Title}
                subtitle={movie.Year}>
                <Image
                    source={{ uri: movie.Poster }}
                    style={{ width: 150, height: 225, }}
                />
                <FlatList
                    keyExtractor={movie => movie.imdbID}
                    data={MOVIES}
                    renderItem={renderMovieDetails}
                />
            </Card>
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