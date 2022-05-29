import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/reducers/cartSlice';
import OrderItem from './OrderItem';
import { ScrollView } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';


const ViewCart = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    const { items, restaurantName } = useSelector(selectCart);
    const totalAmount = items.map((item) => Number(item.price.replace('$', ''))).reduce((prev, current) => prev + current, 0);
    const totalUSD = `$ ${totalAmount.toFixed(2)}`;

    const addOrderToFirebase = async () => {
        await firestore()
            .collection('Orders')
            .add({
                items: items,
                restaurantName: restaurantName,
                createdAt: firestore.FieldValue.serverTimestamp(),
            });

        setModalVisible(false);
    }

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {items.map((item, index) => (
                                <OrderItem key={index} item={item} />
                            ))}
                            <View style={styles.subTotalContainer}>
                                <Text style={styles.subTotalText}>SubTotal</Text>
                                <Text style={styles.totalSumModal}>{totalUSD}</Text>
                            </View>
                        </ScrollView>

                        <View style={styles.checkoutButtonContainer}>
                            <TouchableOpacity style={styles.checkoutButton} onPress={() => addOrderToFirebase()}>
                                <Text style={styles.checkoutLabel}>Checkout</Text>
                                <Text style={styles.totalLabelInCheckout}>{totalAmount ? totalUSD : ""}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    };

    return (
        <>
            <Modal
                animationType='slide'
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
                style={styles.modalContainer}
            >
                {checkoutModalContent()}
            </Modal>
            {
                totalAmount ? (
                    <View style={styles.cartContainer} >
                        <TouchableOpacity style={styles.cartButton} activeOpacity={0.8} onPress={() => setModalVisible(true)}>
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
        fontWeight: 'bold'
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
        fontWeight: 'bold'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalCheckoutContainer: {
        backgroundColor: 'white',
        padding: 16,
        height: 450,
        borderWidth: 1,
    },
    restaurantName: {
        textAlign: 'center',
        fontWeight: '600',
        color: 'black',
        fontSize: 18,
        marginBottom: 10,
    },
    subTotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginHorizontal: 15,
    },
    subTotalText: {
        textAlign: 'left',
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 10,
        color: 'black',
    },
    totalSumModal: {
        fontWeight: '600',
        fontSize: 15,
        color: 'black',
    },
    checkoutButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    checkoutButton: {
        marginTop: 20,
        backgroundColor: '#283346',
        alignItems: 'center',
        padding: 13,
        borderRadius: 30,
        width: 300,
        position: 'relative',
    },
    checkoutLabel: {
        color: '#F2f3f7',
        fontSize: 18,
        fontWeight: 'bold'
    },
    totalLabelInCheckout: {
        position: 'absolute',
        right: 20,
        color: '#F2f3f7',
        fontSize: 13,
        top: 17,
    }
})