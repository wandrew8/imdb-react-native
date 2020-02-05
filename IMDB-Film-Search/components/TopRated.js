import React from 'react';
import { View } from 'react-native';
import { ListItem, FlatList } from 'react-native-elements';
import { MOVIES } from '../shared/movies';


class TopRated extends React.Component {
    render() {
        return (
            <View>
                    {
                        MOVIES.map((movie, i) => (
                            <ListItem
                                key={i}
                                linearGradientProps={{
                                    colors: ['#f1f2f6', '#dfe4ea'],
                                    start: [1, 0],
                                    end: [1, 0],
                                }}
                                title={movie.Title}
                                subtitle={`${movie.Director} | ${movie.Year}`}
                                bottomDivider
                                leftAvatar={{ source: { uri: movie.Poster } }}
                                chevron
                            />
                        ))
                    }
            </View>
        )
    }
}

export default TopRated;