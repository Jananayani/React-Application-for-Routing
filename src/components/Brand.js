import React from "react";
import { ItemList } from '../images/ItemList';
// import './Home.style.css';
import { useParams } from 'react-router-dom';
import './css/Brand.style.css';
import { useState } from "react";
import Category from "./Category";

const Brand = () => {
    const { name } = useParams();
    const filterValue = name?.replace('/', '');
    const [selectedCategory, setSelectedCategory] = useState('');


    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredItems = selectedCategory
        ? ItemList.filter((item) => item.brand.toLowerCase().includes(selectedCategory.toLowerCase()))
        : ItemList;


    return (
        <>
            <div className="side">
            <div className="sidebar">
            
               <Category handleCategoryChange={handleCategoryChange}/>
               </div>
                <div className="card-section-brand">
                    {filterValue === '' ? (
                        ItemList.map((item, key) => (
                            <div key={key} >
                                <img src={item.imageUrl} alt="brand" width="800px" />
                            </div>
                        ))
                    ) : (
                        ItemList.filter((item) => {
                            console.log(filterValue); // Log the value of filterValue
                            return item.brand.toLowerCase().includes(filterValue.toLowerCase());
                        }).map((item, key) => (
                            <div key={key} className="card-brand">
                                <img src={item.imageUrl} alt="brand" width="800px" className="card-image-brand" />
                                <div className="name">{item.name}</div>
                                <div className="price">{item.price}</div>
                            </div>

                        ))
                    )}
                </div>
               
            </div>
        </>
    );
};

export default Brand;
