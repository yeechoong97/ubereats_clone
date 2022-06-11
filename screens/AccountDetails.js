import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { logOut } from '../hooks/useAuth'

const AccountDetails = () => {
    return (
        <View>
            <Text>AccountDetails</Text>
            <TouchableOpacity onPress={logOut}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AccountDetails

const styles = StyleSheet.create({})