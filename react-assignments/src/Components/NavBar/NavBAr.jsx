import { NavLink } from "react-router";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/effects">Effects Component</NavLink>
        </li>
        <li>
          <NavLink to="/state">State Component</NavLink>
        </li>
        <li>
          <NavLink to="/person">Person Component</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
