import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Divider } from '@rneui/themed'
import About from '../components/restaurantDetail/About';

const RestaurantDetail = () => {
    return (
        <View>
            <About />
            <Divider width={1} style={styles.divider} />
        </View>
    )
}

export default RestaurantDetail

const styles = StyleSheet.create({
    divider: {
        marginVertical: 20,
    },
})