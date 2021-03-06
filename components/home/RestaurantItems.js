import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux'
import { selectRestaurant } from '../../redux/reducers/cartSlice'

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url: "https://www.worldtravelconnector.com/wp-content/uploads/2019/11/famous-foods-around-the-world_Italian-Spaghetti.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 164,
        rating: 3.7,
    },
    {
        name: "McDonald",
        image_url: "https://image.goody25.com/images/catalog/59661/20210825_16298833250091_mobile.jpeg",
        categories: ["Fast Food"],
        price: "$$",
        reviews: 16422,
        rating: 4.7,
    },
    {
        name: "KFC",
        image_url: "https://lehleo.com/website/wp-content/uploads/2022/02/112.jpg",
        categories: ["Fast Food"],
        price: "$$",
        reviews: 1922,
        rating: 4.6,
    },
    {
        name: "Secret Recipe",
        image_url: "https://www.sparrowsph.my/image/cache/data/theme/blog/secretrecipe-new_230820183850-1200x800_0.jpg",
        categories: ["Bakery Items", "Cafe"],
        price: "$$",
        reviews: 989,
        rating: 4.1,
    },
]

const RestaurantImage = ({ image }) => (
    <>
        <Image
            style={styles.restaurantImage}
            source={{ uri: image == "" ? "http://www.semenyihecoventure.com/images/joomlart/demo/default.jpg" : image }}
        />
        <TouchableOpacity style={styles.favouriteIcon}>
            <MaterialCommunityIcons name="heart-outline" size={30} color='white' />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = ({ restaurant }) => (
    <View style={styles.restaurantInfoContainer}>
        <View>
            <Text style={styles.restaurantTitle}>{restaurant.name}</Text>
            <Text style={styles.restaurantDetails}>30-45 - min</Text>
        </View>
        <View style={styles.restaurantRatingContainer}>
            <Text>{restaurant.rating}</Text>
        </View>
    </View>
)


const RestaurantItems = ({ restaurantData }) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const pickRestaurant = (restaurant) => {
        dispatch(selectRestaurant(restaurant.name));
        navigation.navigate("RestaurantDetail", {
            name: restaurant.name,
            image: restaurant.image_url,
            price: restaurant.price,
            reviews: restaurant.review_count,
            rating: restaurant.rating,
            categories: restaurant.categories,
        })
    };

    return (
        <>
            {restaurantData.map((restaurant, index) => (
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.restaurantButton}
                    key={index}
                    onPress={() => pickRestaurant(restaurant)}>
                    <View style={styles.restaurantView} >
                        <RestaurantImage image={restaurant.image_url} />
                        <RestaurantInfo restaurant={restaurant} />
                    </View>

                </TouchableOpacity>
            ))}
        </>
    )
}

export default RestaurantItems

const styles = StyleSheet.create({
    restaurantView: {
        marginTop: 10,
        padding: 15,
        backgroundColor: 'white'
    },
    restaurantImage: {
        width: '100%',
        height: 180,
    },
    favouriteIcon: {
        position: 'absolute',
        right: 20,
        top: 15,
    },
    restaurantInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    restaurantTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    },
    restaurantDetails: {
        fontSize: 13,
        color: 'gray'
    },
    restaurantRatingContainer: {
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    restaurantButton: {
        marginBottom: 30,
    }
})