import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';

//import galaxy from '../assets/galaxy-orion-animation.json';

export default function Home({ navigation }) {


    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
            <LottieView
                source={require('../assets/pulsing-loader.json')}
                autoPlay={true}
                Loop={true}
            />

            <Button
                title="Volte"
                onPress={() => navigation.navigate('Detail')}
            />
        </SafeAreaView>


    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
});


