import { Link , Outlet } from "@tanstack/react-router"
import {TanStackRouterDevtools} from '@tanstack/react-router-devtools'
const Header = () => {
  return (
    <div>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/auth'>Log</Link>
        </nav>
        <Outlet/>
        <TanStackRouterDevtools />
    </div>
  )
}

export default Header;