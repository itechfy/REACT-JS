import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as NikeLogo } from "../../assets/icons8-nike.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/signin-ico.svg";
import { ReactComponent as SignOutIcon } from "../../assets/icons/signout-ico.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import Cart from "../cart/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "./navbar.styles.scss";

const Navigation = () => {
  // this will retrieve stored user object
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  //console.log(currentUser);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <NikeLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            HOME
          </Link>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser !== null ? (
            <div className="nav-link">
              <Link className="nav-link pic-link" to="/Profile">
                <div
                  className="round-pic"
                  style={{
                    backgroundImage: `url(${currentUser.photoURL})`,
                    backgroundPosition: `center`,
                    backgroundSize: `150%`,
                    backgroundRepeat: `no-repeat`,
                    backgroundColor: `#DFDFDF`,
                  }}
                  onClick={() => {}}
                ></div>
                <Link className="signout-ico" onClick={SignOutUser}>
                  Logout &nbsp;
                  <SignOutIcon />
                </Link>
              </Link>
            </div>
          ) : (
            <Link className="nav-link" to="/auth">
              <UserIcon />
            </Link>
          )}
          <Cart />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>

      <Outlet />
    </Fragment>
  );
};
export default Navigation;
