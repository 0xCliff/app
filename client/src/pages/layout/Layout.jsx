import NavBar from '../../components/navbar/Navbar';

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <div className='container mx-auto'>{children}</div>
    </div>
  );
}

export default Layout;
