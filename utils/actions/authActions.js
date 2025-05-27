import { getFirebaseApp } from '../firebaseHelper';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export const signUp = async (firstName, lastName, email, password) => {
    try {
        const auth = getFirebaseApp();
        

        const result = await createUserWithEmailAndPassword(auth, email, password);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}