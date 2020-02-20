import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import Loading from './Loading';

class RenderResults extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { movie } = this.props;
        if (this.props.isLoading) {
            return (
                <Loading />
            )
        } if (!this.props.isLoading && movie && movie.Title) {
        return (
            <ScrollView>
                <Card style={{marginBottom: 10 }}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{width: '40%', paddingTop: 5, minHeight: 180, }}>
                            <Image
                                source={{ uri: movie.Poster }}
                                style={{ width: 140, height: '100%', marginBottom: 15, }}/>
                        </View>
                        <View style={{width: '60%' }}>
                            <Text style={{fontSize: 20, textAlign: 'center'}}>{movie.Title}</Text>
                            <ListItem
                                style={{paddingTop: 5, paddingBottom: 30 }}
                                title="Film Details"
                                subtitle={`Year:  ${movie.Year}\nRated:  ${movie.Rated}\nReleased:  ${movie.Released}\nLanguage:  ${movie.Language}\nRuntime:  ${movie.Runtime}\nCountry:  ${movie.Country}`}/>
                        </View>
                    </View>
                </Card>
            </ScrollView>
            )
        } if (movie && !movie.Title && this.props.searchMovie) {
            return (
            <View>
                <Text style={{textAlign: 'center', marginTop: 30,}}>Sorry, we cannot find that movie</Text>
            </View>
        )
        } else {
            return <View />
        }
    }
}

export default RenderResults;