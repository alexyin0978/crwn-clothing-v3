//hooks
import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

//context
import { UserContext } from '../../contexts/User.context';

//assets
import { ReactComponent as CrwnLogo } from '../../assets/navbar/crown.svg';

//style
import './Navbar.style.scss'

//firebase
import { signOutUser } from '../../utils/firebase/firebase';



const Navbar = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleSignout = async () => {

    try {
      
      await signOutUser(); //clean the 'user' from cache
  
      setCurrentUser(null);

    } catch(err) {
      console.log(err);
    }

  };

  return (
    <>  
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <div>
            <CrwnLogo />
          </div>
        </Link>
        <div className='nav-links-container'>
          {
            currentUser &&
            currentUser !== null &&
            currentUser !== undefined ? (
              <span className='nav-link' onClick={handleSignout}>
                Signout
              </span>
            ) : (
              <Link className='nav-link' to='/auth'>
                Signin
              </Link>
            )
          }
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;