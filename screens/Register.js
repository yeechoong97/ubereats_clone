import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Divider } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { createUserWithEmail, logOut, sendVerificationEmail } from '../hooks/useAuth'
import firestore from '@react-native-firebase/firestore';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordValidationMessage = "* Password and Confirm Password does not match."
const emailValidationMessage = "* Invalid email format."
const nameValidationMessage = "* Name is required."

const FormInput = ({ title, focus, password = false, setFocus, setValue, validate }) => (
    <View style={styles.formItemContainer}>
        <View style={styles.titleContainer}>
            <Text style={focus === title ? styles.focusTitle : ""}>{title}</Text>
        </View>
        <TextInput style={focus === title ? styles.focusTextInput : styles.textInput}
            onFocus={() => setFocus(title)}
            onBlur={validate}
            onChangeText={setValue}
            secureTextEntry={password}
        />
    </View>
)

const FormErrorMessage = ({ message }) => (
    <View style={styles.formErrorContainer}>
        <Text style={styles.errorPasswordText}>{message}</Text>
    </View>

)

const Register = () => {

    const navigation = useNavigation();
    const [focus, setFocus] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Validation Purpose
    const [emailError, setEmailError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    // Create New Account
    const createNewAccount = async () => {
        const { additionalUserInfo, user } = await createUserWithEmail(email, password);
        if (additionalUserInfo.isNewUser) {
            await firestore().collection('users').doc(user.uid).set({
                email: email,
                name: name,
            })
            await sendVerificationEmail();
            await logOut();
            navigation.goBack();
        }
    }

    const validatePassword = () => (setPasswordError(password !== confirmPassword))

    const validateEmail = () => (setEmailError(!emailRegex.test(email)))

    const validateName = () => (setNameError(name.length <= 0))

    return (
        <KeyboardAvoidingView style={styles.registerContainer} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerLabel}>Account Registration</Text>
                <Divider width={1} color="#4b4b4b" />
            </View>
            <FormInput title="Name" focus={focus} setFocus={setFocus} setValue={setName} validate={() => validateName()} />
            {nameError ? <FormErrorMessage message={nameValidationMessage} /> : <></>}
            <FormInput title="Email" focus={focus} setFocus={setFocus} setValue={setEmail} validate={() => validateEmail()} />
            {emailError ? <FormErrorMessage message={emailValidationMessage} /> : <></>}
            <FormInput title="Password" focus={focus} password={true} setFocus={setFocus} setValue={setPassword} validate={() => validatePassword()} />
            <FormInput title="Confirm Password" focus={focus} password={true} setFocus={setFocus} setValue={setConfirmPassword} validate={() => validatePassword()} />
            {passwordError ? <FormErrorMessage message={passwordValidationMessage} /> : <></>}
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
        marginTop: 10,
        marginBottom: 5,
        borderRadius: 8,
        borderWidth: 1,
        padding: 10,
        borderColor: '#a3a3a3',
        fontSize: 16,
        width: '100%',
    },
    focusTextInput: {
        marginTop: 10,
        marginBottom: 5,
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
    },
    formErrorContainer: {
        width: '80%',
        paddingHorizontal: 5,
        alignItems: 'center',
    },
})