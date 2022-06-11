import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Divider } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { createUserWithEmail } from '../hooks/useAuth'
import firestore from '@react-native-firebase/firestore';


const FormInput = ({ title, focus, password = false, setFocus, setValue, checkPassword }) => (
    <View style={styles.formItemContainer}>
        <View style={styles.titleContainer}>
            <Text style={focus === title ? styles.focusTitle : ""}>{title}</Text>
        </View>
        <TextInput style={focus === title ? styles.focusTextInput : styles.textInput}
            onFocus={() => setFocus(title)}
            onChangeText={setValue}
            secureTextEntry={password}
        />
        {
            title === "Confirm Password" && !checkPassword ? (
                <Text style={styles.errorPasswordText}>* Password and Confirm Password does not match.</Text>
            ) : (<></>)
        }
    </View>
)

const Register = () => {

    const navigation = useNavigation();
    const [focus, setFocus] = useState(null);
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    // Create New Account
    const createNewAccount = async () => {
        const { additionalUserInfo, user } = await createUserWithEmail(email, password);
        if (additionalUserInfo.isNewUser) {
            await firestore().collection('users').doc(user.uid).set({
                email: email,
                name: name,
            })
        }
    }

    return (
        <KeyboardAvoidingView style={styles.registerContainer} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerLabel}>Account Registration</Text>
                <Divider width={1} color="#4b4b4b" />
            </View>
            <FormInput title="Name" focus={focus} setFocus={setFocus} setValue={setName} />
            <FormInput title="Email" focus={focus} setFocus={setFocus} setValue={setEmail} />
            <FormInput title="Password" focus={focus} password={true} setFocus={setFocus} setValue={setPassword} />
            <FormInput title="Confirm Password" focus={focus} password={true} setFocus={setFocus} setValue={setConfirmPassword} checkPassword={password === confirmPassword} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.cancelButton}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}
                    style={styles.submitButton}
                    onPress={createNewAccount}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Register

const styles = StyleSheet.create({
    registerContainer: {

        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 25,
    },
    formItemContainer: {
        width: '80%',
        padding: 5,
        alignItems: 'center',
    },
    textInput: {
        marginVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        padding: 10,
        borderColor: '#a3a3a3',
        fontSize: 16,
        width: '100%',
    },
    focusTextInput: {
        marginVertical: 10,
        borderRadius: 8,
        borderWidth: 2,
        padding: 10,
        borderColor: '#4b4b4b',
        fontSize: 16,
        width: '100%',
    },
    focusTitle: {
        fontWeight: '600',
        color: '#4b4b4b',
        textAlign: 'left',
    },
    titleContainer: {
        flexDirection: 'row',
        width: '100%',
    },
    headerContainer: {
        padding: 20,
        marginBottom: 10,
        borderRadius: 5,
    },
    headerLabel: {
        color: '#4b4b4b',
        fontWeight: '600',
        fontSize: 18,
        paddingBottom: 2,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        marginVertical: 15,
    },
    cancelButton: {
        backgroundColor: '#ff9090',
        borderRadius: 12,
        padding: 15,
        alignItems: 'center',
        width: '30%',
    },
    submitButton: {
        backgroundColor: '#3c7aff',
        borderRadius: 12,
        padding: 15,
        alignItems: 'center',
        width: '30%',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700',
    },
    errorPasswordText: {
        color: '#ff9090',
        fontSize: 12,
        alignSelf: 'flex-start',
    }
})