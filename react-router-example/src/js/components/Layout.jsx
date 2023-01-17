import { Link, Outlet } from "react-router-dom";


function Layout() {
    return (
        <>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <h1>Layout</h1>
    
          <Outlet />
        </>
    );
}

export default Layout;