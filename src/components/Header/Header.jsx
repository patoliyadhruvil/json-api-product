import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="product-admin-header shadow-lg">
      <nav className="navbar navbar-expand-lg bg-gradient">
        <div className="container-fluid">
          <Link className="navbar-brand text-dark" to="/admin/products">
            <img src="https://demo.bootstrapdash.com/purple-admin-free/assets/images/logo.svg" alt="image" width={200} />
          </Link>
          <div className="user-profile-dropdown">
            <button
              className="btn btn-light dropdown-toggle dropdownButton"
              type="button"
            >
              <i className="bi bi-person-circle text-dark"></i> User Admin
            </button>
            <div className="dropdown-menu dropdownMenu" aria-labelledby="userProfileDropdown">
              <Link className="dropdown-item" to="/admin/profile">
                <i className="bi bi-person"></i> Settings
              </Link>
              <Link className="dropdown-item" to="/admin/settings">
                <i className="bi bi-gear"></i> Gallery
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
