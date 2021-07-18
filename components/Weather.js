import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from 'react';
import Forecast from "./Forcast";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=110eb9d981c27ab4179c2e5b43a7cd90`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])

    return (

        <ImageBackground source={require('../image/bg.jpg')} style={styles.backdrop}>
            <View>
                <Text style={styles.title}>
                    Zip Code is {props.zipCode}
                </Text>
                <Forecast {...forecastInfo} />
            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '259%',
    },
    title: {
        alignItems: 'center',
        fontSize: 14,
        color: '#ffffff'
    }
});