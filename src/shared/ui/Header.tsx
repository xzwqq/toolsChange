import { Link , Outlet } from "@tanstack/react-router"
const Header = () => {
  return (
    <div>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/auth'>Log</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Header;