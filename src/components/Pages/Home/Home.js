import React from "react";
import SearchBar from "../../SearchBar";
import Header from "../../Header";
import { Item } from "../../SearchBar";
import { useState } from "react";
import { ItemList } from "../../../images/ItemList";
import './Home.style.css';
import { useParams } from 'react-router-dom';





const Home = () => {


    const { name } = useParams();
    



    return (
        <>
            <div className="card-section">
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

                        {<h5>{item.name}</h5>}

                        {<p>{item.price}</p>}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;
