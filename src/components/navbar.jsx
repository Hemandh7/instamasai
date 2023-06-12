// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const Navbar = () => {
  
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    
    setLoggedIn(false);
    Navigate('/posts');
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!loggedIn && (
          <>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
        {loggedIn && (
          <>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
