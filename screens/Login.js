import { View, Text, StyleSheet, Image, TextInput, Button, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react';


const Login = () => {

    const [focus, setFocus] = useState(null);

    return (
        <View style={styles.loginContainer}>
            <View style={styles.formContainer}>
                <Image source={require('../assets/images/ubereats.png')} style={styles.logoImage} />
                <TextInput style={focus === 'email' ? styles.focusTextInput : styles.textInput} placeholder='Email' onChangeText={() => { }} onFocus={() => setFocus('email')} />
                <TextInput style={focus === 'password' ? styles.focusTextInput : styles.textInput} placeholder='Password' onChangeText={() => { }} secureTextEntry={true} onFocus={() => setFocus('password')} />
            </View>
            <KeyboardAvoidingView style={styles.buttonContainer}>
                <Button title='Login' />
            </KeyboardAvoidingView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: 'space-between',
        marginVertical: '20%',
        alignItems: 'center',
    },
    logoImage: {
        width: 125,
        height: 125,
    },
    formContainer: {
        width: '80%',
        marginVertical: 20,
    },
    textInput: {
        marginVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        padding: 10,
        borderColor: '#a3a3a3',
        fontSize: 16,
    },
    focusTextInput: {
        marginVertical: 10,
        borderRadius: 8,
        borderWidth: 2,
        padding: 10,
        borderColor: '#4b4b4b',
        fontSize: 16,
    },
    buttonContainer: {
        alignSelf: 'flex-end',
        flexDirection: 'column',
        backgroundColor: 'red',
        width: 200,
    }
})