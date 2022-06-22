import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '355621313519-jr2hcn0veo429gpbfc8u1nh0oq0kdvrg.apps.googleusercontent.com',
})

const useAuth = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);

    const onAuthStateChanged = (user) => {
        if (user?.emailVerified) {
            setUser(user);
        }
        else {
            setUser(null);
        }
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, [])

    return user;
}

const createUserWithEmail = async (email, password) => (
    await auth().createUserWithEmailAndPassword(email, password)
)

const sendVerificationEmail = async () => (
    await auth().currentUser.sendEmailVerification()
)

const signInWithEmail = async (email, password) => {
    let response = await auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            return error.code
        })
    return response;
}

const logOut = async () => {
    await auth().signOut();
}

const signInWithGoogle = async () => {
    try {
        const service = await GoogleSignin.hasPlayServices();
        console.log(service);
        const { idToken } = await GoogleSignin.signIn();

        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        return auth().signInWithCredential(googleCredential);
    }
    catch (error) {
        console.log(error);
    }


}

export { createUserWithEmail, logOut, signInWithEmail, sendVerificationEmail, signInWithGoogle };

export default useAuth;