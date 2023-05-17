import { useState } from "react";
import './css/Dropdown.style.css';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ImageIcon } from "../images/ImageIcons";

import { Link } from 'react-router-dom';
 
const Dropdown = ({ Description }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleItemClick = () => {
        setOpen(false);
    };


    return (
        <div>
            <div className="dropdown">

                <a href="#" onClick={handleOpen}>{Description} <FontAwesomeIcon icon={faCaretDown} className="icon" /></a>
            </div>
            {/* {open && <div>Dropdown content goes here</div>} */}
            {open ? (
                <ul className="menu">
                    <li className="menu-item">
                        <div className="dropdown-card" onClick={handleItemClick}>
                            
                            {ImageIcon.map((item) => (
                                <div className="dropdown-list">
                                    <div key={item} className="brand-image">
                                        {
                                            <Link key={item} to={`/Home/${item.brand}`}>
                                                <img src={item.imageUrl}alt="images" width="200px"height="300px"
                                            ></img>
                                            </Link>
                                            
                                        }
                                    </div>

                                
                                </div>
                            ))}
                        </div>
                        {/* <a href="">LG</a> */}

                    </li>

                </ul>
            ) : null}
        </div>
    );
};

export default Dropdown;
