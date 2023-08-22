import { NavLink } from 'react-router-dom';

import Button from '../button/Button';
import './Navbar.css';

function NavBar({ value, onChange }) {
  const handleSignOut = () => {
    onChange();
  };

  let content = '';
  if (value) {
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
        <Button primary rounded>
          <NavLink to='/signin'>Sign In</NavLink>
        </Button>
        <Button primary rounded>
          <NavLink to='signup'>Sign Up</NavLink>
        </Button>
      </div>
    );
  }

  return (
    <div className='bg-dark-slate h-14 w-full flex items-center justify-center'>
      <div className='container mx-auto flex items-center justify-between'>
        <NavLink to='/' className='no-underline'>
          <h1 className='text-purple'>App</h1>
        </NavLink>
        {content}
      </div>
    </div>
  );
}

export default NavBar;
