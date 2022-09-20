import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../input-field/input-field.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";
const defaultFormFields = {
  displayName: "",
  Email: "",
  Password: "",
  ConfirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  //destructuring form fields from default form fields
  const { displayName, Email, Password, ConfirmPassword } = formFields;

  // using userContext values

  const { setCurrentUser } = useContext(UserContext);

  //input validator
  const ShowError = (value) => {
    document.getElementById("error-box").innerHTML = value;
  };
  //clear form function
  const ResetForm = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Password !== ConfirmPassword) {
      ShowError("Passwords do not match");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        Email,
        Password
      );
      // console.log(user);
      setCurrentUser(user);
      createUserDocumentFromAuth(user, { displayName });

      ResetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        ShowError("Email already in use");
      }
      console.log("Error signing up ", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target; // getting event and attached attributes and destructuring them
    // console.log(event.target.value);
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="signup-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          type="text"
          id="name"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          required
        />

        <FormInput
          label={"Email"}
          type="email"
          id="_email"
          name="Email"
          onChange={handleChange}
          value={Email}
          required
        />

        <FormInput
          label={"Password"}
          type="password"
          id="_pass"
          name="Password"
          onChange={handleChange}
          value={Password}
          required
        />

        <FormInput
          label={"Confirm Password"}
          type="password"
          id="c-pass"
          name="ConfirmPassword"
          onChange={handleChange}
          value={ConfirmPassword}
          required
        />

        <Button type="submit">Sign up</Button>
        <div id="error-box"></div>
      </form>
    </div>
  );
};
export default SignUpForm;
