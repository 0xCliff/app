import BtnSuccess from '../buttons/btn-success/BtnSuccess';
import './Navbar.css';

function NavBar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className='navbar'>
      <a href='/' className='nav-brand'>
        <h1 className='nav-title'>App</h1>
      </a>
      <div className="btn-group">
        <BtnSuccess text='Sign in' route="/login" />
        <BtnSuccess text='Sign up' route="/signup" />
      </div>
    </div>
  );
}

export default NavBar;
