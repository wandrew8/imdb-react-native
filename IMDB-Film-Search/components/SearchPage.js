import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
  
const styles = StyleSheet.create({
    text: {
      color: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#444',
        alignItems: 'center',
        justifyContent: 'center',
      },
  })

class SearchPage extends React.Component {
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.text}>Welcome to the search page</Text>
            </View>
        )
    }
}

export default SearchPage;