import React from "react";
import SearchBar from "../../SearchBar";
import Header from "../../Header";
import { Item } from "../../SearchBar";
import { useState } from "react";
import { ItemList } from "../../../images/ItemList";
import './Home.style.css';
import { useParams } from 'react-router-dom';
import Category from "../../Category";




const Home = () => {


    const { name } = useParams();
    



    return (
        <>
            <div className="card-section">
                {/* <Category/> */}
                <div className="side-bar"></div>
                {ItemList.map((item) => (
                    <div className="card">
                        <div key={item} className="card-image">
                            {
                                <img
                                    src={item.imageUrl}
                                    alt="images"
                                    width="200px"
                                    height="300px"
                                ></img>
                            }
                        </div>

                        {<p className="item-name-home">{item.name}</p>}

                        {<p className="item-price-home">{item.price}</p>}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;
