import {signInWithGooglePopup,createUserDocumentFromAuth} from '../utils/firebase/firebase.utils'
import './routes.css'
const SignIn = ()=>{
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
            <button className='google-signin' onClick={loginWithGoogle}>
            <img src={require("../assets/icons/google-signin-logo.png")} width="35px" alt="" />
           <p> Continue with Google</p>
            </button>
        </div>
    )
}
export default SignIn;