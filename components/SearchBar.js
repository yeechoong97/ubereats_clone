import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SearchBar = () => {
    return (
        <View style={styles.searchBar}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                styles={{
                    textInput: styles.inputStyle,
                    textInputContainer: styles.inputContainer
                }}
                renderLeftButton={() => <View style={styles.locationView}>
                    <Ionicons name="location-sharp" size={24} />
                </View>}
                renderRightButton={() => <View style={styles.searchView}>
                    <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
                    <Text>Search</Text>
                </View>}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 15,
        flexDirection: "row"
    },
    inputStyle: {
        backgroundColor: "#eee",
        borderRadius: 20,
        fontWeight: "700",
        marginTop: 7
    },
    inputContainer: {
        backgroundColor: '#eee',
        borderRadius: 50,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
    },
    locationView: {
        marginLeft: 10,
    },
    searchView: {
        flexDirection: 'row',
        marginRight: 8,
        backgroundColor: 'white',
        padding: 9,
        borderRadius: 30,
        alignItems: 'center'
    }
})