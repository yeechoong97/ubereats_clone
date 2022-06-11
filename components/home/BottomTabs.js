import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Icon = ({ name, text, navigate }) => (
    <TouchableOpacity onPress={navigate}>
        <View>
            <FontAwesome5 name={name} size={20} style={styles.icon} />
            <Text style={styles.iconLabel}>{text}</Text>
        </View>
    </TouchableOpacity>
)

const BottomTabs = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.tabContainer}>
            <Icon name="home" text="Home" />
            <Icon name="search" text="Browse" />
            <Icon name="shopping-bag" text="Grocery" />
            <Icon name="receipt" text="Orders" />
            <Icon name="user" text="Account" navigate={() => navigation.navigate("AccountDetails")} />
        </View>
    )
}

export default BottomTabs

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        margin: 8,
        marginHorizontal: 25,
        justifyContent: 'space-between',
    },
    icon: {
        marginBottom: 3,
        alignSelf: 'center'
    },
    iconLabel: {
        fontSize: 12
    }
})