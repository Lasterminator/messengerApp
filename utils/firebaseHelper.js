// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";

export const getFirebaseApp = () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
   
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log({App: app})
  const auth = getAuth(app);
  console.log("HESEFRSA",{auth})
  return auth
};
