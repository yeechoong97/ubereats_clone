
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import OrderComplete from './screens/OrderComplete';

const RootNavigation = () => {

    const Stack = createNativeStackNavigator();
    const screenOptions = {
        headerShown: false
    };

    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
                    <Stack.Screen name="OrderComplete" component={OrderComplete} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    )
}

export default RootNavigation