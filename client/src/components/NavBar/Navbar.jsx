import './Navbar.css';

function NavBar() {
  return (
    <div className='navbar'>
      <a href='/' className='nav-brand'>
        <h1 className='nav-title'>App</h1>
      </a>
      <div className='btn-group'>
        <a className='btn' href='/signup'>
          Sign Up
        </a>
        <a className='btn' href='/login'>
          Sign In
        </a>
      </div>
    </div>
  );
}

export default NavBar;
