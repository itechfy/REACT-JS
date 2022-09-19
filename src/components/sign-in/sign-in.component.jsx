import { useState } from "react";
import FormInput from "../input-field/input-field.component";
import './sign-in-form.styles.scss';
import Button from "../button/button.component";
import { SignInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
 Email: '',
 Password : '',
}

const SignInForm = ()=>{
    const [formFields,setFormFields]=useState(defaultFormFields);
    //destructuring form fields from default form fields
    const {Email,Password} = formFields;

    //input validator
    const ShowError= (value)=>{
            document.getElementById('error-box').innerHTML = value;
    }
    //clear from function
    const ResetForm = ()=>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
    
        try {     
            const response = await SignInAuthUserWithEmailAndPassword(Email,Password);
            console.log(response);
            ResetForm();

        } catch (error) {
          
            if( error.code === 'auth/user-not-found'){
                ShowError("No Account associated with this email");
            }
            else if( error.code === 'auth/wrong-password'){
                ShowError("Password doesn't exist");
            }
            console.log("Error loggin in ",error);
        }
    }



    const handleChange =(event)=>{
        const {name, value}=event.target; // getting event and attached attributes and destructuring them
      // console.log(event.target.value);
        setFormFields({...formFields,[name]:value});
    }
    return(
        <div className="signup-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
             
                <FormInput label={"Email"} type="email" id="email" name="Email" onChange={handleChange} value={Email} required />
               
                <FormInput label={"Password"} type="password" id="pass" name="Password" onChange={handleChange} value={Password} required />
           
                <Button type="submit">Sign in</Button>
                <div id = "error-box"></div>
            </form>
        </div>
    )
}
export default SignInForm;