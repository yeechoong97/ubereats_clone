import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const HeaderButton = ({ title, activeTab, switchTab }) => {
    return (
        <View>
            <TouchableOpacity style={[styles.headerButton, { backgroundColor: activeTab === title ? 'black' : 'white' }]} onPress={() => switchTab(title)}>
                <Text style={[styles.buttonText, { color: activeTab === title ? 'white' : 'black' }]}>{title}</Text>
            </TouchableOpacity>
        </View >
    )
}


const HeaderTab = ({ activeTab, switchTab }) => {

    return (
        <View style={styles.headerTab}>
            <HeaderButton title={"Delivery"} activeTab={activeTab} switchTab={switchTab} />
            <HeaderButton title={"Pickup"} activeTab={activeTab} switchTab={switchTab} />
        </View>
    )
}

export default HeaderTab

const styles = StyleSheet.create({
    headerTab: {
        flexDirection: "row",
        alignSelf: 'center'
    },
    headerButton: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
    },
    buttonText: {
        fontWeight: "900",
        fontSize: 15
    }
})

