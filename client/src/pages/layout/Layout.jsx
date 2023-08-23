import NavBar from '../../components/NavBar/Navbar';
import useAuthContext from '../../hooks/useAuth';

function Layout({ children }) {
  const { cookies, logout } = useAuthContext();

  return (
    <div>
      <NavBar value={cookies.user} onChange={logout} />
      <div className='container mx-auto'>{children}</div>
    </div>
  );
}

export default Layout;
