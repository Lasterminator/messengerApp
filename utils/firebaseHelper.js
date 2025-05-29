// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "@firebase/app";
import { getAuth } from "@firebase/auth";

export const getFirebaseApp = () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {

  };

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  const app =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

  return app;
};
