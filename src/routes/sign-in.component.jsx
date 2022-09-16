import { useEffect } from 'react'
import {auth,signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect} from '../utils/firebase/firebase.utils'
import { getRedirectResult } from 'firebase/auth'
import SignUpForm from '../components/sign-up/sign-up.component'
import './routes.css'
const SignIn = ()=>{
    // Fetching data from auth into callback after redirecting
    useEffect(()=>{
      async function RedirectedData(){
        const response = await getRedirectResult(auth);
        if(response){
            const userDocRef = await createUserDocumentFromAuth(response.user);
            console.log(userDocRef);
        }
      }
      RedirectedData();
    }, []);

    const loginWithGoogle = async ()=>{
        // const response=await signInWithGooglePopup();
        const {user} = await signInWithGooglePopup();
     //   console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    }

    return(
        <div>
            <h1>Welcome to Sign in Page</h1>
            <SignUpForm/>
            <button className='google-signin' onClick={loginWithGoogle}>
            <img src={require("../assets/icons/google-signin-logo.png")} width="35px" alt="" />
           <p> Continue with Google</p>
            </button>
            <button className='google-signin' onClick={signInWithGoogleRedirect}>
            <img src={require("../assets/icons/google-signin-logo.png")} width="35px" alt="" />
           <p> Redirect with Google</p>
            </button>
        </div>
    )
}
export default SignIn;