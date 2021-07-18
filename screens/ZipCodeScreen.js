import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight style={styles.margin    } onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View style={styles.zipItem}>
            <Text style={styles.font}>{place}</Text>
            <Text style={styles.font}>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View >
            <ImageBackground source={require('../image/zipCode.jpg')} style={styles.image}>
                <FlatList
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
                />
            </ImageBackground>
        </View>
    );
}
const colors = ['#f5f5dc',]

const styles = StyleSheet.create({
    zipItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: '#f0ffff',
        margin:'0.3rem',
    },
    margin:{
        margin:'0.2rem',

   },
    image: {
        width: '100%',
        height: '152%'
    },
    font: {    
        fontSize: 20,
        color: '#000080',
        margin:'0.3rem',

    }
})