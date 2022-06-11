import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';

const useAuth = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);

    const onAuthStateChanged = (user) => {
        setUser(user);
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

export { createUserWithEmail, logOut, signInWithEmail }

export default useAuth;