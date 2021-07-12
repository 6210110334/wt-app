import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useState } from 'react';
import Forecast from "./Forcast";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <Text style={styles.title}>
                    Zip Code is {props.zipCode}
                </Text>

                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    title: {
        alignItems: 'center',
        fontSize:14,
        color:'#ffffff'
    }
});