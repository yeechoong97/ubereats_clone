import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmail } from '../hooks/useAuth';


const alertError = ({ alertTitle, alertMessage }) => Alert.alert(
    alertTitle,
    alertMessage,
    [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]
)


const Login = () => {

    const navigation = useNavigation();
    const [focus, setFocus] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const submitLogin = async () => {
        const response = await signInWithEmail(email, password);
        if (response === "auth/user-not-found") {
            alertError({ alertTitle: "User Not Found", alertMessage: "Invalid email address or password is entered. Please try again." });
        }
    }


    return (
        <KeyboardAvoidingView style={styles.loginContainer} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.formContainer}>
                <Image source={require('../assets/images/ubereats.png')} style={styles.logoImage} />
                <TextInput
                    style={focus === 'email' ? styles.focusTextInput : styles.textInput}
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                    onFocus={() => setFocus('email')}
                    keyboardType="email-address" />
                <TextInput
                    style={focus === 'password' ? [styles.focusTextInput] : styles.textInput}
                    placeholder='Password'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    onFocus={() => setFocus('password')} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.loginButton} onPress={submitLogin} activeOpacity={0.7}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.registerText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView >
    )
}

export default Login

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoImage: {
        width: 125,
        height: 125,
        marginVertical: 50,
    },
    formContainer: {
        width: '100%',
        marginVertical: 20,
        alignItems: 'center',
        padding: 10,
    },
    textInput: {
        marginVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        padding: 10,
        borderColor: '#a3a3a3',
        fontSize: 16,
        width: '80%',
    },
    focusTextInput: {
        marginVertical: 10,
        borderRadius: 8,
        borderWidth: 2,
        padding: 10,
        borderColor: '#4b4b4b',
        fontSize: 16,
        width: '80%',
    },
    buttonContainer: {
        width: '40%',
        marginVertical: 10,
    },
    loginButton: {
        width: '100%',
        backgroundColor: '#283346',
        borderRadius: 12,
        padding: 15,
        alignItems: 'center',
    },
    loginText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
    },
    registerText: {
        color: '#0046c0',
        fontSize: 14,
        fontWeight: '500',
    }
})