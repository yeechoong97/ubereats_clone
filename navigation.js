
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import store from './redux/store';
import OrderComplete from './screens/OrderComplete';
import useAuth from './hooks/useAuth';
import Login from './screens/Login';

const RootNavigation = () => {

    const Stack = createNativeStackNavigator();
    const screenOptions = {
        headerShown: false
    };

    const user = useAuth();

    return (
        <ReduxProvider store={store}>
            <PaperProvider>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
                        {
                            user ? (
                                <>
                                    <Stack.Screen name="Home" component={Home} />
                                    <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
                                    <Stack.Screen name="OrderComplete" component={OrderComplete} />
                                </>
                            ) : (
                                <>
                                    <Stack.Screen name="Login" component={Login} />
                                </>
                            )
                        }
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        </ReduxProvider>
    )
}

export default RootNavigation