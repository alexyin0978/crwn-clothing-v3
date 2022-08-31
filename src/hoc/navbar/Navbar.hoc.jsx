//hooks
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

//assets
import { ReactComponent as CrwnLogo } from '../../assets/navbar/crown.svg';

//style
import './Navbar.style.scss'



const Navbar = () => {
  return (
    <>  
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <div>
            <CrwnLogo />
          </div>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/auth'>
            Signin
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;