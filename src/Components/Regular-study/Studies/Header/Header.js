import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1> <FontAwesomeIcon icon={faBook}></FontAwesomeIcon> <span>YouR</span> RegulaR <span>StudY</span></h1>
            <p>ReaD BookS FoR YouR DaY</p>
        </div>
    );
};

export default Header;