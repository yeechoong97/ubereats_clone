import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/reducers/cartSlice';
import LottieView from 'lottie-react-native';
import firestore from '@react-native-firebase/firestore';
import MenuItem from '../components/restaurantDetail/MenuItem';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

const OrderComplete = ({ route }) => {

    const navigation = useNavigation();
    const [lastOrder, setLastOrder] = useState(null);
    const { items, restaurantName } = useSelector(selectCart);
    const totalAmount = items.map((item) => Number(item.price.replace('$', ''))).reduce((prev, current) => prev + current, 0);
    const totalUSD = `$ ${totalAmount.toFixed(2)}`;
    const orderID = route.params;

    useEffect(() => {
        const subcriber = firestore()
            .collection('Orders')
            .doc(orderID)
            .onSnapshot(documentSnapshot => {
                setLastOrder(documentSnapshot.data());
            });
        return () => subcriber();
    }, [lastOrder])

    return (
        <SafeAreaView style={styles.viewContainer}>
            <TouchableOpacity style={styles.closeIcon} activeOpacity={0.9} onPress={() => navigation.navigate("Home")}>
                <AntDesign name="close" size={25} color="#727272" />
            </TouchableOpacity>
            <LottieView style={styles.checkMark} source={require('../assets/animations/check-mark.json')} autoPlay loop={false} speed={0.5} />

            <View style={styles.orderLabel}>
                <Text style={styles.orderText}>Your order at {restaurantName} has been placed for {totalUSD}</Text>
            </View>
            {
                lastOrder ? (<MenuItem foods={lastOrder.items} hideCheckbox={true} />) : (<></>)
            }
            <LottieView style={styles.checkMark} source={require('../assets/animations/cooking.json')} autoPlay speed={0.5} />
        </SafeAreaView>
    )
}

export default OrderComplete

const styles = StyleSheet.create({
    checkMark: {
        height: 100,
        alignSelf: 'center',
        marginBottom: 30,
    },
    viewContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    cookingContainer: {
        height: 200,
        alignSelf: 'center'
    },
    orderLabel: {
        padding: 10,
        marginHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#3b3b3b29',
    },
    orderText: {
        fontWeight: '600',
        fontSize: 18,
        color: 'black',
    },
    closeIcon: {
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
        top: 20,
        right: 20,
    }
})