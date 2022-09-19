import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as NikeLogo} from '../../assets/icons8-nike.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/signin-ico.svg';
import './navbar.styles.scss';
const Navigation = ()=>{
    return(
      <Fragment>
        <div className="navigation">
           
            <Link className="logo-container" to='/'>
              <NikeLogo className="logo"/>
            </Link>
      
            <div className="nav-links-container">
              <Link className="nav-link" to='/'>HOME</Link>
              <Link className="nav-link" to='/shop'>SHOP</Link>
              <Link className="nav-link" to='/auth'>
                <UserIcon/>
              </Link>
            </div>

        </div>
        <Outlet/>
      </Fragment>
    );
  }
export default Navigation;