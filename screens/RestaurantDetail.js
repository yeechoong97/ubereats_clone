import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Divider } from '@rneui/themed'
import About from '../components/restaurantDetail/About';
import MenuItem from '../components/restaurantDetail/MenuItem';

const RestaurantDetail = () => {
    return (
        <View style={styles.container}>
            <About />
            <Divider width={1} style={styles.divider} />
            <MenuItem />
        </View>
    )
}

export default RestaurantDetail

const styles = StyleSheet.create({
    divider: {
        marginVertical: 20,
        marginBottom: 5
    },
    container: {
        flex: 1
    }
})