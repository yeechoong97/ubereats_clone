import React from 'react'
import { SafeAreaView, StyleSheet, View, ScrollView } from 'react-native'
import Categories from '../components/Categories'
import HeaderTab from '../components/HeaderTab'
import RestaurantItem from '../components/RestaurantItem'
import SearchBar from '../components/SearchBar'

const Home = () => {
    return (
        <SafeAreaView style={styles.homeStyle}>
            <View style={styles.headerView}>
                <HeaderTab />
                <SearchBar />
            </View>
            <Categories />
            <ScrollView showsVerticalScrollIndicator={false}>
                <RestaurantItem />
            </ScrollView>
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