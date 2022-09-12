import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm">
        <div className="container-fluid">
          <NavLink className="navbar-brand   fw-bold fs-4" to="/">
            PC-GAMES
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active text-primary fs-5" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5" to="/games">
                Games
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5 text-success" to="/users">
                User - Favourites
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link fs-5" to="contacts">
                  Contacts
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark">
               <i className="fa fa-sign-in me-2"></i> Login</NavLink>
               <NavLink to="/register" className="btn btn-outline-success ms-2">
               <i className="fa fa-user-plus me-2"></i> Register</NavLink>
               
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
