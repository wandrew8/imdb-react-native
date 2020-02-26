import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

function Loading() {
    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size="large" color="#34ace0" />
            <Text style={styles.loadingText}>Loading . . .</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        loadingView: {
            alignItems: 'center',
            justifyContent: 'center',
            margin: 50,
            flex: 1,
        },
        loadingText: {
            color: '#34ace0',
            fontSize: 14,
            fontWeight: 'bold',
        }

    }
)

export default Loading;