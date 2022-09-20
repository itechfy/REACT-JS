import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as NikeLogo } from "../../assets/icons8-nike.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/signin-ico.svg";
import { UserContext } from "../../contexts/user.context";
import "./navbar.styles.scss";
const Navigation = () => {
  // this will retrieve stored user object
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
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
            <Link className="nav-link" to="/auth">
              <div
                className="round-pic"
                style={{
                  backgroundImage: `https://images.unsplash.com/photo-1538805232509-99227eeb8c62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
                }}
              ></div>
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              <UserIcon />
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
