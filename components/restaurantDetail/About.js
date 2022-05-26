import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const image = "https://www.worldtravelconnector.com/wp-content/uploads/2019/11/famous-foods-around-the-world_Italian-Spaghetti.jpg";
const title = "Farmhouse Kitchen Thai Cuisine"
const description = "Thai . Comfort Food . $$ . 4 ⭐ (2913+)";


const RestaurantImage = ({ image }) => (
    <Image source={{ uri: image }} style={styles.restaurantImage} />
)

const RestaurantTitle = ({ title }) => (
    <Text style={styles.restaurantTitle}>{title}</Text>
)

const RestaurantDescription = ({ description }) => (
    <Text style={styles.restaurantDescription}>{description}</Text>
)

const About = () => {
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={title} />
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
        fontSize: 24,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15,
    },
    restaurantDescription: {
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: '400',
        fontSize: 14
    }
})
