import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/reducers/cartSlice';

const ViewCart = ({ restaurantName }) => {

    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const totalAmount = cartItems.map((item) => Number(item.price.replace('$', ''))).reduce((prev, current) => prev + current, 0);
    const totalUSD = `$ ${totalAmount}`;

    return (
        <>
            {
                totalAmount ? (
                    <View style={styles.cartContainer}>
                        <TouchableOpacity style={styles.cartButton} activeOpacity={0.8}>
                            <Text style={styles.cartLabel}>View Cart</Text>
                            <Text style={styles.totalLabel}>{totalUSD}</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <>
                    </>
                )
            }
        </>
    )
}

export default ViewCart

const styles = StyleSheet.create({
    cartLabel: {
        color: '#F2f3f7',
        fontSize: 18,
        marginRight: 30,
    },
    cartButton: {
        marginTop: 20,
        backgroundColor: '#283346',
        alignItems: 'center',
        padding: 10,
        borderRadius: 30,
        width: 300,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    cartContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        bottom: 20,
        zIndex: 999
    },
    totalLabel: {
        color: '#F2f3f7',
        fontSize: 18,
    }
})