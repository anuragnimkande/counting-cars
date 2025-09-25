import { NavLink } from "react-router";
import "./App.css"; // make sure your CSS file is imported

export default function MyNavbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <NavLink
          className="text-decoration-none fw-semibold link-hover navbar-brand"
          to="/"
          style={{ margin: "0 20px", fontFamily: "candara", fontSize: "30px" }}
        >
          {props.title}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link-custom">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/brands" className="nav-link-custom">
                Brands
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link-custom">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link-custom">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
