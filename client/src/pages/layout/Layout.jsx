import NavBar from '../../components/navbar/Navbar';

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}

export default Layout;
