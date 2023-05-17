import React, { useState } from 'react';
import './css/Header.style.css';


import Dropdown from './Dropdown';

import { useNavigate } from 'react-router-dom';


const Header = ({ navItems }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchResults, setSearchResults] = useState(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  const handleSearch = (results) => {
    setSearchResults(results);
  };

  const navigate = useNavigate();
  return (
    <div className={`container ${searchResults ? 'search-open' : ''}`}>
    

      {/* <h3>Apex.com</h3> */}
      <header>
        <nav>
          <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.url}>
                <a href={item.url} className="links">
                  {item.label}
                </a>
              </li>
            ))}
            <Dropdown Description='Brands' />
            <div className="user-buttons">
          <button className="sign-in"  type="submit"
                    onClick={() => {
                        navigate("/");
                    }}>Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
          </ul>
           
        </nav>
        {/* <SearchBar handleSearch={handleSearch} /> */}
      
      </header>
      <div className="content">
        {searchResults ? (
          <div className="search-results">
            {searchResults.map((Item) => (
              <div key={Item.name}>
                <h3>{Item.name}</h3>
                {/* Render additional country details here */}
              </div>
            ))}
          </div>
        ) : null}

        <div className="main-content">
          {/* Render your main content here */}
        </div>
      </div>
    </div>
  );
};

export default Header;
