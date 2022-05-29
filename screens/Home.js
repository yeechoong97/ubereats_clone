import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, View, ScrollView } from 'react-native'
import BottomTabs from '../components/home/BottomTabs'
import Categories from '../components/home/Categories'
import HeaderTab from '../components/home/HeaderTab'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import SearchBar from '../components/home/SearchBar';
import { Divider, Skeleton } from '@rneui/themed'
import RestaurantItemSkeleton from '../components/home/RestaurantItemSkeleton'

const YELP_API_KEY = "qiiJFk247Ia2AZ82fs5gjWPI6E-_U79Ube_lEXytFAfqYvK0KTX4wdJQn8wu8ohPlAINR1YPfbv4JaWmAyly7eiYmDgsfe0wAWtx45LKmkADt9TU07Ged3UA9dqMYnYx"

const Home = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [city, setCity] = useState("Arlington");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantFromYelp = async () => {
        const yelpURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            }
        };

        return fetch(yelpURL, apiOptions)
            .then((res) => res.json())
            .then((res) => setRestaurantData(res.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))));
    }

    useEffect(() => {
        getRestaurantFromYelp();
    }, [city, activeTab, restaurantData])

    return (
        <SafeAreaView style={styles.homeStyle}>
            <View style={styles.headerView}>
                <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <Categories />
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    restaurantData.length === 0 ? (
                        <RestaurantItemSkeleton />
                    ) : (
                        <RestaurantItems restaurantData={restaurantData} />
                    )
                }
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
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