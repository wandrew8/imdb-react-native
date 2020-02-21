import React from 'react';
import * as Animatable from 'react-native-animatable';
import { Text, ScrollView, Image, StyleSheet, TouchableOpacity, View, Modal, Button } from 'react-native';
import { Card, ListItem, Rating, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
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

class RenderMovieCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            author: '',
            text: '',
            rating: 3,
            comments: [],
        }
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal})
    }

    resetForm() {
        this.setState({
            rating: 5,
            author: '',
            text: '',
        })
    }


    render() {

        const { movie } = this.props;
        const rating = (parseFloat(movie.imdbRating) / 2).toFixed(1);

        if(movie) {
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
                    <TouchableOpacity
                        onPress={() => this.toggleModal()}  
                        style={{position: 'absolute', top: 110, backgroundColor: 'rgba(0,0,0,0.5)', width: '100%' }}>
                        <Animatable.View animation="slideInLeft">
                            <Icon
                                name="comments"
                                backgroundColor="rgba(0,0,0,0)"
                                color='white'
                                size={50}
                                style={{position: 'absolute', top: 20, right: 20, }}>
                            </Icon>
                            <Text style={styles.header}>{movie.Title}</Text>
                            <Text style={styles.caption}>Release Date: {movie.Released}</Text>
                        </Animatable.View>
                    </TouchableOpacity>
                    <Animatable.View animation="slideInUp">
                        <Card>
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
                                subtitle={`${movie.Awards === "N/A" ? "This film has recieved no awards" : movie.Awards }\n\nReviews\n${movie.Ratings[0] ? `${movie.Ratings[0].Source}: ${movie.Ratings[0].Value}` : ""}\n${movie.Ratings[1] ? `${movie.Ratings[1].Source}: ${movie.Ratings[1].Value}` : ""}\n${movie.Ratings[2] ? `${movie.Ratings[2].Source}: ${movie.Ratings[2].Value}` : ""}`}
                                bottomDivider/>
                        </Card>
                    </Animatable.View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 30 }}>
                        <Modal
                            onRequestClose={() => this.toggleModal()}
                            visible={this.state.showModal}
                            animationType="slide"
                            transparent={false}>
                            <Text style={{textAlign: 'center', marginTop: 40, fontSize: 30, }}>Add Review</Text>
                            <Text style={{textAlign: 'center', marginTop: 10, fontSize: 15, }}>{movie.Title}</Text>
                            <View style={styles.modal}>
                                <Rating
                                    showRating
                                    startingValue={this.state.rating}
                                    imageSize={40}
                                    onFinishRating={(rating)=>this.setState({rating: rating})}
                                    style={{paddingVertical: 10}}/>
                                <Input
                                    placeholder="Author"
                                    leftIcon={{ type: 'font-awesome', name: 'user-o'}}
                                    leftIconContainerStyle={{paddingRight: 10}}
                                    onChangeText={(author)=>this.setState({author: author})}
                                    value={this.state.author}/>
                                <Input
                                    placeholder="Review"
                                    leftIcon={{ type: 'font-awesome', name: 'comment-o'}}
                                    leftIconContainerStyle={{paddingRight: 10}}
                                    onChangeText={(comment)=>this.setState({text: comment})}
                                    value={this.state.text}/>
                                <View style={{margin: 10}}>
                                    <Button
                                        title='Submit'
                                        color='#3BAD87'
                                        onPress={() => {
                                            this.handleComment()
                                            this.toggleModal()
                                            this.resetForm()}}/>
                                </View>
                                <View style={{margin: 10}}>
                                    <Button
                                        title='Cancel'
                                        color='#808080'
                                        onPress={() => {
                                            this.toggleModal()
                                            this.resetForm()}}/>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </ScrollView>
            )
        }
        return <Text>Sorry, can't find this movie</Text>
    }
}

class MovieInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: MOVIES,
            comments: [],
        }
    }
    static navigationOptions = {
        title: 'Film Details',
    }

    render() {
        const movieId = this.props.navigation.getParam('movieId');
        const movie = this.state.movies.filter(movie => movie.imdbID === movieId)[0];
        return (
            <View>
                <RenderMovieCard movie={movie} />
            </View>
        )
    }
}


export default MovieInfo;