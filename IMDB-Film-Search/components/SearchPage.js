import React from 'react';
import { View, Text, StyleSheet, Button, Alert, Keyboard } from 'react-native';
import { Input, Header } from 'react-native-elements';
import RenderResults from './RenderResults';
  
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
      },
  })

class SearchPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            isLoading: false,
         }
    }

    updateSearch = search => {
        this.setState({ search });
    }

    handleSearch = () => {
        if (!this.state.search) {
            return (
                Alert.alert(
                    'Oops!',
                    'Please enter some text',
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    {cancelable: false},
                )
            )
        } else {
            this.setState({ isLoading: true })
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
        return (
            <View style={{flex: 1}}>
                <Header 
                    backgroundColor='#3BAD87'
                    leftComponent={{ icon: 'film', color: '#fff', type: 'font-awesome' }}
                    centerComponent={{ text: 'IMDB Film Search', style: { color: '#fff' }}}/>
                <View style={styles.container}>
                    <Text style={styles.text}>SEARCH FILMS</Text>
                    <View style={{ width: '90%' }}>
                        <Input
                            inputContainerStyle={{marginBottom: 20}}
                            leftIcon={{type: 'font-awesome', name: 'search' }}
                            placeholder='  Search for films here...'
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
                    <RenderResults movie={this.state.data}/>
                </View>
            </View>
        )
    }
}

export default SearchPage;