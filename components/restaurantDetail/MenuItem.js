import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/themed'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectCart } from '../../redux/reducers/cartSlice'

const FoodInfo = ({ food }) => (
    <View style={styles.foodInfoContainer}>
        <Text style={styles.titleStyle}>{food.title}</Text>
        <Text style={styles.descriptionStyle}>{food.description}</Text>
        <Text>{food.price}</Text>
    </View>
)

const FoodImage = ({ image, marginLeft }) => (
    <View>
        <Image source={{ uri: image }} style={[styles.foodImage, { marginLeft: marginLeft }]} />
    </View>
)

const MenuItem = ({ foods, hideCheckbox, marginLeft }) => {

    const dispatch = useDispatch();
    const { items } = useSelector(selectCart);
    const selectItem = (item, checkBoxValue) => dispatch(addToCart({ item, checkBoxValue }));

    const isFoodInCart = (food) => (
        Boolean(items.find(item => item.title === food.title))
    )

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItem} >
                        {
                            hideCheckbox ? (<></>) : (
                                <BouncyCheckbox
                                    onPress={(checkBoxValue) => selectItem(food, checkBoxValue)}
                                    iconStyle={{ borderColor: "lightgray" }}
                                    fillColor="green"
                                    isChecked={isFoodInCart(food)}
                                />
                            )
                        }
                        <FoodInfo food={food} />
                        <FoodImage image={food.image} marginLeft={marginLeft ? marginLeft : 0} />
                    </View>
                    <Divider style={styles.divider} />
                </View>
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
        width: '60%',
        justifyContent: 'space-evenly',
        marginRight: 10,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: '600'
    },
    divider: {
        width: '90%',
        alignSelf: 'center',
        marginHorizontal: 20
    },
    descriptionStyle: {
        fontSize: 13,
    }
})