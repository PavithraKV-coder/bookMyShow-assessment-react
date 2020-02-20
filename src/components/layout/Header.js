import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-3">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              <center>bookMyshow</center>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
