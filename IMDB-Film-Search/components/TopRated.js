import React from 'react';
import { View, FlatList, Text  } from 'react-native';
import { ListItem } from 'react-native-elements';
import { MOVIES } from '../shared/movies';



class TopRated extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        title: 'Top Rated Films',
    }

    render() {
    const { navigate } = this.props.navigation;
    const renderMovie = ({item}) => {
        return (
            <ListItem
                linearGradientProps={{
                    colors: ['#f1f2f6', '#dfe4ea'],
                    start: [1, 0],
                    end: [1, 0],
                }}
                title={item.Title}
                subtitle={`${item.Director} | ${item.Year}`}
                bottomDivider
                leftAvatar={{ source: { uri: item.Poster } }}
                chevron
                onPress={() => navigate('MovieInfo', {movieId: item.imdbID})}
            />
        )
}
        return (
            <View>
                <FlatList
                    data={MOVIES}
                    renderItem={renderMovie}
                    keyExtractor={movie => movie.imdbID}
                ></FlatList>
                <Text>Hello</Text>
            </View>

        )
    }
}

export default TopRated;