import React from 'react';
import Main from './components/Main';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container} >
    //   <Text style={styles.text} >IMDB Film Reviewer</Text>
    // </View>
    <Main />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 34,
    color: '#fff',

  },
});
