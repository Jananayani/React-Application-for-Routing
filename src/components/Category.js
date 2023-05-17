import React from "react";
import { useState } from "react";
import './css/Category.style.css';

const Category = ()=>{

    const [selectedCategory, setSelectedCategory] = useState('');


    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    return(
      <>
    <h4>Category</h4>
    <select className="dropdown" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All</option>
        <option value="a">Washine Machine</option>
        <option value="b">Refregirator</option>
        <option value="c">Electric Iron</option>
        <option value="d">Microvave Oven</option>
    </select>
    
</> 
    );
}

export default Category;