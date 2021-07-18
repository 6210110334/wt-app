import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.center}>
            <Text style={styles.show}>{props.main}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <View style={styles.row}>
                <Text style={styles.show}>{props.temp}</Text>
                <Text style={styles.fontSize12}> °C</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    show: {
        alignItems: 'center',
        fontSize: 30,
        color: '#ffffff'
    },
    description: {
        alignItems: 'center',
        fontSize: 20,
        color: '#ffffff'
    },
    fontSize12: {
        fontSize: 20,
        color: '#ffffff'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    }
});