import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const HeaderButton = ({ title, activeTab, setActiveTab }) => {
    return (
        <View>
            <TouchableOpacity style={[styles.headerButton, { backgroundColor: activeTab === title ? 'black' : 'white' }]} onPress={() => setActiveTab(title)}>
                <Text style={[styles.buttonText, { color: activeTab === title ? 'white' : 'black' }]}>{title}</Text>
            </TouchableOpacity>
        </View >
    )
}


const HeaderTab = ({ activeTab, setActiveTab }) => {

    return (
        <View style={styles.headerTab}>
            {/* Header Button 1 */}
            <HeaderButton title={"Delivery"} activeTab={activeTab} setActiveTab={setActiveTab} />
            {/* Header Button 2 */}
            <HeaderButton title={"Pickup"} activeTab={activeTab} setActiveTab={setActiveTab} />
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

