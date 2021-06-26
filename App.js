import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import { Restaurant, OrderDelivery } from './screens'
import Tabs from './navigation/tabs'

const Root = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Root.Navigator
                screenOptions={{
                    headerShown: false
                }}
                // initialRouteName={'Home'}
            >
                <Root.Screen name="Home" component={Tabs} />
                <Root.Screen name="Restaurant" component={Restaurant} />
                <Root.Screen name="OrderDelivery" component={OrderDelivery} />
            </Root.Navigator>
        </NavigationContainer>
    )
}

export default App;