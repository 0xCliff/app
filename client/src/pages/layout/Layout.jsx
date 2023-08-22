import NavBar from '../../components/navbar/Navbar';
import useAuthContext from '../../hooks/useAuth';

function Layout({ children }) {
  const { cookies, logout } = useAuthContext();

  return (
    <div>
      <NavBar value={cookies.sessionId} onChange={logout} />
      <div className='container mx-auto'>{children}</div>
    </div>
  );
}

export default Layout;
