import React, { useState } from "react";
import './css/SearchBar.style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faSearch);

library.add(faTruckFast);

const SearchBar = ({ handleSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const items = [
    { name: "Washing Machine" },
    { name: "Refregirator"},
    { name: "Freezer"},
    { name: "Fan"},
    { name: "Microvave Oven"},
    { name: "Electric Oven"},
    { name: "Electric Iron"},
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  
    if (e.target.value === "") {
      setIsSearching(false);
      setFilteredItems([]);
    } else {
      const filtered = items.filter((item) => {
        return item.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setFilteredItems(filtered);
      setIsSearching(true);
      handleSearch(filtered, true);
    }
  };

  const handleSelectItem = (selectedItem) => {
    setSearchInput(selectedItem.name);
    setIsSearching(false);
    setFilteredItems([]);
    handleSearch([selectedItem], false);
  };

  return (
    <div className="search-bar">
       <div className="truck"><FontAwesomeIcon icon="truck-fast" color='purple' style={{ fontSize: '50px' } }  /><p>Apex.com</p></div>
      <div className="search-container">
        <input
          type="search"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        />
        <button className="search-button">
          <FontAwesomeIcon icon="search" size="lg" color="white"/>
        </button>
      </div>
      {isSearching && (
        <ul className="card">
          {filteredItems.map((Item) => (
            <li key={Item.name} onClick={() => handleSelectItem(Item)}>
              {Item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
