import React, { useState } from 'react';
import './Header.style.css';
import { ImageIcon } from '../images/ImageIcons';

import Dropdown from './Dropdown';
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = ({ navItems }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchResults, setSearchResults] = useState(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  const handleSearch = (results) => {
    setSearchResults(results);
  };

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
