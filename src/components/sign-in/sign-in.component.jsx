import { useState, useContext } from "react";
import FormInput from "../input-field/input-field.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";
import { SignInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
  Email: "",
  Password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  //destructuring form fields from default form fields
  const { Email, Password } = formFields;
  // using userContext
  const { setCurrentUser } = useContext(UserContext);
  //input validator
  const ShowError = (value) => {
    document.getElementById("error-box").innerHTML = value;
  };
  //clear from function
  const ResetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await SignInAuthUserWithEmailAndPassword(
        Email,
        Password
      );
      // context to save user object
      //setCurrentUser(user);

      ResetForm();
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        ShowError("No Account associated with this email");
      } else if (error.code === "auth/wrong-password") {
        ShowError("Password doesn't exist");
      }
      console.log("Error loggin in ", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target; // getting event and attached attributes and destructuring them
    // console.log(event.target.value);
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="signup-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          id="email"
          name="Email"
          onChange={handleChange}
          value={Email}
          required
        />

        <FormInput
          label={"Password"}
          type="password"
          id="pass"
          name="Password"
          onChange={handleChange}
          value={Password}
          required
        />

        <Button type="submit">Sign in</Button>
        <div id="error-box"></div>
      </form>
    </div>
  );
};
export default SignInForm;
