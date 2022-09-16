import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
 displayName:'',
 Email: '',
 Password : '',
 ConfirmPassword: '',
}
const SignUpForm = ()=>{
    const [formFields,setFormFields]=useState(defaultFormFields);
    //destructuring form fields from default form fields
    const {displayName,Email,Password,ConfirmPassword} = formFields;
    const handleChange =(event)=>{
        const {name, value}=event.target; // getting event and attached attributes and destructuring them
       // console.log(event.target.value);
        setFormFields({...formFields,[name]:value});
    }
    return(
        <div>
            <h1>Sign up using email and password</h1>
            <form onSubmit={()=>{
                createAuthUserWithEmailAndPassword(defaultFormFields.Email,defaultFormFields.Password);
            }}>
                <label htmlFor="name">Display Name</label>
                <input type="text" id="name" name="displayName" onChange={handleChange} value={displayName} required />
                
                <label htmlFor="_email">Email</label>
                <input type="email" id="_email" name="Email" onChange={handleChange} value={Email} required />

                <label htmlFor="pass">Password</label>
                <input type="password" id="pass" name="Password" onChange={handleChange} value={Password} required />

                <label htmlFor="c-pass">Confirm password</label>
                <input type="password" id="c-pass" name="ConfirmPassword" onChange={handleChange} value={ConfirmPassword} required />

                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}
export default SignUpForm;