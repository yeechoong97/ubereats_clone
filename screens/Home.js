import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import HeaderTab from '../components/HeaderTab'
import SearchBar from '../components/SearchBar'

const Home = () => {
    return (
        <SafeAreaView style={styles.homeStyle}>
            <View style={styles.headerView}>
                <HeaderTab />
                <SearchBar />
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    homeStyle: {
        backgroundColor: "#eee",
        flex: 1
    },
    headerView: {
        backgroundColor: 'white',
        padding: 15,
    }
})