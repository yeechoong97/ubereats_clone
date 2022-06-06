import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Divider } from '@rneui/themed'
import About from '../components/restaurantDetail/About';
import MenuItem from '../components/restaurantDetail/MenuItem';
import ViewCart from '../components/restaurantDetail/ViewCart';

const foods = [
    {
        title: "Lasagna",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg",
        price: "$19.20",
        description: "Chilaquiles with a Mexican sauce. A delicous mexican dish."
    },
    {
        title: "Italian Spaghetti",
        image: "https://www.worldtravelconnector.com/wp-content/uploads/2019/11/famous-foods-around-the-world_Italian-Spaghetti.jpg",
        price: "$28.99",
        description: "Amazing Indian dish with a lot of spices. A delicous dish."
    },
    {
        title: "PizzaHut",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg",
        price: "$19.20",
        description: "Chilaquiles with a Mexican sauce. A delicous mexican dish."
    },
    {
        title: "KFC",
        image: "https://www.worldtravelconnector.com/wp-content/uploads/2019/11/famous-foods-around-the-world_Italian-Spaghetti.jpg",
        price: "$28.99",
        description: "Amazing Indian dish with a lot of spices. A delicous dish."
    },
    {
        title: "Italian Spaghetti",
        image: "https://www.worldtravelconnector.com/wp-content/uploads/2019/11/famous-foods-around-the-world_Italian-Spaghetti.jpg",
        price: "$28.99",
        description: "Amazing Indian dish with a lot of spices. A delicous dish."
    },
    {
        title: "HDL",
        image: "https://www.worldtravelconnector.com/wp-content/uploads/2019/11/famous-foods-around-the-world_Italian-Spaghetti.jpg",
        price: "$28.99",
        description: "Amazing Indian dish with a lot of spices. A delicous dish."
    },
    {
        title: "Indian Spaghetti",
        image: "https://www.worldtravelconnector.com/wp-content/uploads/2019/11/famous-foods-around-the-world_Italian-Spaghetti.jpg",
        price: "$28.99",
        description: "Amazing Indian dish with a lot of spices. A delicous dish."
    },
]

const RestaurantDetail = ({ route }) => {

    return (
        <View style={styles.container}>
            <About restaurantData={route.params} />
            <Divider width={1} style={styles.divider} />
            <MenuItem foods={foods} />
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