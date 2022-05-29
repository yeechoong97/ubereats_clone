import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Skeleton } from '@rneui/themed'
import { localRestaurants } from './RestaurantItems'

const RestaurantItemSkeleton = () => {
    return (
        <>
            {
                localRestaurants.map((restaurant, index) => (
                    <View style={styles.skeletonContainer} key={index}>
                        <Skeleton style={styles.imageSkeleton} />
                        <View style={styles.contentSkeleton} >
                            <Skeleton style={styles.titleSkeleton} />
                            <Skeleton style={styles.descriptionSkeleton} />
                        </View>
                    </View>
                ))
            }
        </>
    )
}

export default RestaurantItemSkeleton

const styles = StyleSheet.create({
    imageSkeleton: {
        width: '100%',
        height: 180,
    },
    titleSkeleton: {
        width: '50%',
        height: 20,
    },
    descriptionSkeleton: {
        width: '30%',
        height: 15,
    },
    contentSkeleton: {
        marginTop: 5,
        height: 40,
        justifyContent: 'space-between',
    },
    skeletonContainer: {
        flex: 1,
        marginTop: 10,
        padding: 15,
    }
})