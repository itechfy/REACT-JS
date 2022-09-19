// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {getFirestore,doc,setDoc, getDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwlt1gbUnkllHEXUrh_EJf7IuOWdoVVys",
  authDomain: "nike-store-db.firebaseapp.com",
  projectId: "nike-store-db",
  storageBucket: "nike-store-db.appspot.com",
  messagingSenderId: "559523170372",
  appId: "1:559523170372:web:cc67960353932e13529411"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider(); // we used google sign in provider

// our provider will prompt a user to select account of google
googleProvider.setCustomParameters({
    prompt:'select_account'
});

export const auth = getAuth();
// google sign in provider and auth to pass in parameters and gets the user object
export const signInWithGooglePopup=()=> signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect=()=> signInWithRedirect(auth,googleProvider);


const db  = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInformation = {})=>{

    // a reference document containing database location, collection and user id
    const userDocRef = doc(db,'users',userAuth.uid);
    
    //console.log(userDocRef);

    //creating snapshot / copy of reference document and checking if document exists.
    const userSnapshot = await getDoc(userDocRef);

   // console.log(userSnapshot);
   
   // if user doesnt exists then create the user and set to the doc
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            })
    
        }   catch(error){
            console.log("Error creating the user", error.message);
        } 
    }

    
    return userDocRef;
}

// creating user with email and password

export const createAuthUserWithEmailAndPassword =async (email,password) =>{
 if(!email && !password) return;

   return await createUserWithEmailAndPassword(auth,email,password);
}
export const SignInAuthUserWithEmailAndPassword =async (email,password) =>{
 if(!email && !password) return;

   return await signInWithEmailAndPassword(auth,email,password);
}