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

class TopRated extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Here are some of the top rated movies</Text>
            </View>
        )
    }
}

export default TopRated;