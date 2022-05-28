import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const OrderItem = ({ item }) => {

    const { title, price } = item;

    return (
        <View style={styles.orderItemContainer}>
            <Text style={styles.orderItemTitle}>{title}</Text>
            <Text style={styles.orderItemPrice}>{price}</Text>
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    orderItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
    },
    orderItemTitle: {
        fontSize: 14,
        fontWeight: '600'
    },
    orderItemPrice: {
        opacity: 0.7,
        fontSize: 14,
    }
})