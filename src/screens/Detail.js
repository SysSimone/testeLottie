import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';


export default function Detail({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
            <LottieView
                source={require('../assets/loading-saving.json')}
                autoPlay={true}
                Loop={true}
            />

            <Button
                title="V"
                onPress={() => navigation.navigate('Home')}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
});


