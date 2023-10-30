import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteStackParams } from '../types';
import Home from '../views/Home';
import Detail from '../views/Detail';
const Stack = createNativeStackNavigator<RouteStackParams>();


const routeScreenDefaultOptions = {
    headerStyle: {
        backgroundColor: "rgba(7,26,93,255)",
    },
    headerTitleStyle: {
        color: "#fff",
    },
    title: 'My home',
    
};

const Routes = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} options={routeScreenDefaultOptions}/>
            <Stack.Screen name="Detail" component={Detail} options={routeScreenDefaultOptions}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Routes;
