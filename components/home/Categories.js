import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'

const items = [
    {
        image: require('../../assets/images/shopping-bag.png'),
        text: "Pick-up",
    },
    {
        image: require('../../assets/images/soft-drink.png'),
        text: "Soft Drinks",
    },
    {
        image: require('../../assets/images/bread.png'),
        text: "Bakery Items",
    },
    {
        image: require('../../assets/images/fast-food.png'),
        text: "Fast Foods",
    },
    {
        image: require('../../assets/images/deals.png'),
        text: "Deals",
    },
    {
        image: require('../../assets/images/coffee.png'),
        text: "Coffee & Tea",
    },
    {
        image: require('../../assets/images/desserts.png'),
        text: "Desserts",
    },
]

const Categories = () => {
    return (
        <View style={styles.viewContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    items.map((item, index) => (
                        <View style={styles.iconsView} key={index}>
                            <Image style={styles.iconImage} source={item.image} />
                            <Text style={styles.iconText}>{item.text}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    iconImage: {
        width: 50,
        height: 40,
        resizeMode: "contain"
    },
    iconText: {
        fontSize: 13,
        fontWeight: '900',
    },
    iconsView: {
        alignItems: 'center',
        marginRight: 30,
    },
    viewContainer: {
        marginTop: 5,
        paddingVertical: 10,
        paddingLeft: 20,
        backgroundColor: '#fff',
    }
})