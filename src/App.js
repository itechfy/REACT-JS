import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.actions";

import Home from "./routes/home.component";
import Navigation from "./components/Navigation/navbar.component";
import Authentication from "./routes/Authentication.component";
import Shop from "./routes/Shop/Shop.component";
import _404 from "./components/error/404.component";
import Profile from "./routes/Profile/profile.component";
import CheckoutPage from "./routes/checkout/checkout.component";
//import { UserContext } from "./contexts/user.context";

const App = () => {
  // const { currentUser } = useContext(UserContext);
  const currentUser = null;
  const dispatch = useDispatch();
  const location = useLocation();
  // const navigate = useNavigate();
  //console.log(currentUser);
  // if (currentUser !== null)
  //   if (location.pathname === "/auth") window.location.replace("/");

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      {/* These routes will then be rendered in index.js wrapped up with BrowserRouter*/}
      <Route path="/*" element={<Navigation />}>
        {/*First navigation component will be render here and then outlet/render the remaining routes*/}
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />

        <Route path="404" element={<_404 />} />
        <Route path="profile" element={<Profile />} />
        <Route path="checkout" element={<CheckoutPage />} />

        <Route
          path="auth"
          element={
            currentUser ? (
              <Navigate to="/" state={{ from: location }} />
            ) : (
              <Authentication />
            )
          }
        />
      </Route>
    </Routes>
  );
};
export default App;
