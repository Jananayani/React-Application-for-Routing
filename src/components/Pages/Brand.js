import React from "react";
import { ItemList } from '../../images/ItemList';
// import './Home.style.css';
import { useParams } from 'react-router-dom';

const Brand = () => {
    const { name } = useParams();
    const filterValue = name?.replace('/', '');

    return (
        <>
            <div className="card-section">
                {filterValue === '' ? (
                    ItemList.map((item, key) => (
                        <div key={key}>
                            <img src={item.imageUrl} alt="brand" width="800px" />
                        </div>
                    ))
                ) : (
                    ItemList.filter((item) => {
                        console.log(filterValue); // Log the value of filterValue
                        return item.brand.toLowerCase().includes(filterValue.toLowerCase());
                    }).map((item, key) => (
                        <div key={key}>
                            <img src={item.imageUrl} alt="brand" width="800px" />
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default Brand;
