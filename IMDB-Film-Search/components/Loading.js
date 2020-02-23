import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

function Loading() {
    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size="large" color="#5637DD" />
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
            color: '#5637DD',
            fontSize: 14,
            fontWeight: 'bold',
        }

    }
)

export default Loading;