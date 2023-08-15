import NavBar from '../NavBar/Navbar'

function Layout({ children }) {
  return (
    <div>
        <NavBar />
        {children}
    </div>
  )
}

export default Layout