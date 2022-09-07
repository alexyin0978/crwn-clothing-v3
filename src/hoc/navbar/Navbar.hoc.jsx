//hooks
import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

//context
import { UserContext } from '../../contexts/User.context';
import { CartContext } from '../../contexts/Cart.context';

//component
import CartIcon from '../../components/cartIcon/CartIcon.component';
import CartDropdown from '../../components/cartDropdown/CartDropdown.component';

//assets
import { ReactComponent as CrwnLogo } from '../../assets/navbar/crown.svg';

//style
import './Navbar.styles.scss';

//firebase
import { signOutUser } from '../../utils/firebase/firebase';



const Navbar = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
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
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;