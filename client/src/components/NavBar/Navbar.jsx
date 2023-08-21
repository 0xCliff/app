import { NavLink } from 'react-router-dom';

import Button from '../button/Button';
import './Navbar.css';

function NavBar() {
  return (
    <div className='bg-dark-slate h-16 w-full flex items-center justify-center'>
      <div className='w-2/3 flex items-center justify-between'>
        <NavLink to='/' className='no-underline'>
          <h1 className='text-purple'>App</h1>
        </NavLink>
        <div className='flex justify-around w-48'>
          <Button
            success
            rounded
            className='hover:bg-dark-slate hover:text-green hover:shadow-sm hover:shadow-green active:shadow'
          >
            <NavLink to='/signin'>Sign In</NavLink>
          </Button>
          <Button
            success
            rounded
            className='hover:bg-dark-slate hover:text-green hover:shadow-sm hover:shadow-green active:shadow'
          >
            <NavLink to='signup'>Sign Up</NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
