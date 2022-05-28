import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Divider } from '@rneui/themed'
import About from '../components/restaurantDetail/About';
import MenuItem from '../components/restaurantDetail/MenuItem';
import { useNavigation } from '@react-navigation/native';
import ViewCart from '../components/restaurantDetail/ViewCart';

const RestaurantDetail = ({ route }) => {

    return (
        <View style={styles.container}>
            <About restaurantData={route.params} />
            <Divider width={1} style={styles.divider} />
            <MenuItem />
            <ViewCart />
        </View>
    )
}

export default RestaurantDetail

const styles = StyleSheet.create({
    divider: {
        marginTop: 20,
        marginBottom: 10,
    },
    container: {
        flex: 1
    }
})