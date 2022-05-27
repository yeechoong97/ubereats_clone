import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/themed'

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
]
const FoodInfo = ({ food }) => (
    <View style={styles.foodInfoContainer}>
        <Text style={styles.titleStyle}>{food.title}</Text>
        <Text>{food.description}</Text>
        <Text>{food.price}</Text>
    </View>
)

const FoodImage = ({ image }) => (
    <View>
        <Image source={{ uri: image }} style={styles.foodImage} />
    </View>
)

const MenuItem = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <TouchableOpacity key={index} activeOpacity={0.8}>
                    <View style={styles.menuItem}>
                        <FoodInfo food={food} />
                        <FoodImage image={food.image} />
                    </View>
                    <Divider style={styles.divider} />
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

export default MenuItem

const styles = StyleSheet.create({
    foodImage: {
        height: 100,
        width: 100,
        borderRadius: 8,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    foodInfoContainer: {
        width: 240,
        justifyContent: 'space-evenly',
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: '600'
    },
    divider: {
        width: '90%',
        alignSelf: 'center',
        marginHorizontal: 20
    }
})