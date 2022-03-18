import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Detail from '../screens/Detail';


const Stack = createNativeStackNavigator();

//DENTRO DO STACK CRIO A NAVEGAÇÃO E É PRECISO COLOCAR ELA DENTRO DE UM CONTAINER

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Lottie'>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}
