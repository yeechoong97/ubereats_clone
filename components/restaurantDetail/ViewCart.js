import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ViewCart = ({ restaurantName }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.cartContainer}>
            <TouchableOpacity style={styles.cartButton} activeOpacity={0.8}>
                <Text style={styles.cartLabel}>View Cart</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ViewCart

const styles = StyleSheet.create({
    cartLabel: {
        color: '#F2f3f7',
        fontSize: 18,
    },
    cartButton: {
        marginTop: 20,
        backgroundColor: '#283346',
        alignItems: 'center',
        padding: 10,
        borderRadius: 30,
        width: 300,
        position: 'relative',
    },
    cartContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        bottom: 20,
        zIndex: 999
    }
})