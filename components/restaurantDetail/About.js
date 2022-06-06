import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

const yelpRestaurantInfo = {
    name: 'Farmhouse Kitchen Thai Cuisine',
    image: 'https://www.worldtravelconnector.com/wp-content/uploads/2019/11/famous-foods-around-the-world_Italian-Spaghetti.jpg',
    price: '$$',
    reviews: '1500',
    rating: 1.5,
    categories: [{ title: "Indian" }, { title: 'Comfort Food' }]
};

const RestaurantImage = ({ image, navigation }) => (
    <>
        <Image source={{ uri: image }} style={styles.restaurantImage} />
        <TouchableOpacity style={styles.backIcon} activeOpacity={0.9} onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={25} color="#727272" />
        </TouchableOpacity>
    </>
)

const RestaurantTitle = ({ name }) => (
    <Text style={styles.restaurantTitle}>{name}</Text>
)

const RestaurantDescription = ({ description }) => (
    <Text style={styles.restaurantDescription}>{description}</Text>
)

const About = ({ restaurantData }) => {

    const { name, image, price, reviews, rating, categories } = restaurantData;
    const formattedCategories = categories.map((cat) => cat.title).join(' • ');
    const description = `${formattedCategories} ${price ? ' • ' + price : ""} • 💳 • ${rating} ⭐ • (${reviews}+)`;

    const navigation = useNavigation();

    return (
        <View>
            <RestaurantImage image={image} navigation={navigation} />
            <RestaurantTitle name={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    restaurantImage: {
        width: '100%',
        height: 180,
    },
    restaurantTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15,
    },
    restaurantDescription: {
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: '400',
        fontSize: 14
    },
    backIcon: {
        backgroundColor: '#ffffff',
        height: 35,
        width: 35,
        borderRadius: 6,
        padding: 4,
        shadowColor: '#dde2e9',
        elevation: 6,
        shadowRadius: 5,
        shadowOffset: { width: 1, height: 13 },
        position: 'absolute',
        top: 10,
        left: 10,
    }
})
