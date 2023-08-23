import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import Button from '../button/Button';
import Modal from '../modal/Modal';
import './Navbar.css';
import LoginForm from '../login/LoginForm';
import useAuthContext from '../../hooks/useAuth';

function NavBar() {
  const { cookies, setError, logout } = useAuthContext();
  const [signinModal, setSigninModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  const handleSignOut = () => {
    logout();
  };

  const openSigninModal = () => {
    setSigninModal(true);
  };

  const closeSigninModal = () => {
    setSigninModal(false);
    setError(null);
  };

  const openSignupModal = () => {
    setSignupModal(true);
  };

  const closeSignupModal = () => {
    setSignupModal(false);
    setError(null);
  };

  let content = '';
  if (cookies['connect.sid']) {
    content = (
      <div className='flex justify-around w-48'>
        <Button danger rounded onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>
    );
  } else {
    content = (
      <div className='flex justify-around w-48'>
        <Button primary rounded onClick={openSigninModal}>
          Sign In
        </Button>
        {signinModal && (
          <Modal onClose={closeSigninModal}>
            <LoginForm onClose={closeSigninModal} />
          </Modal>
        )}
        <Button primary rounded onClick={openSignupModal}>
          SignUp
        </Button>
        {signupModal && <Modal onClose={closeSignupModal}>Signup form</Modal>}
      </div>
    );
  }

  return (
    <div className='bg-dark-slate h-14 w-full flex items-center justify-center'>
      <div className='container mx-auto flex items-center justify-between'>
        <NavLink to='/' className='no-underline'>
          <h1 className='text-purple'>Buffer Overflow</h1>
        </NavLink>
        {content}
      </div>
    </div>
  );
}

export default NavBar;
