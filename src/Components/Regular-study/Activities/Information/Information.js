import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Information.css'

const Information = () => {
    return (
        <div className='allInformations'>
            <div className='img-info'>
                <img src="https://scontent.fspd5-1.fna.fbcdn.net/v/t1.6435-9/96292069_2647776022127413_8260645281981267968_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=-ai8lr_DT9UAX8WdznU&_nc_ht=scontent.fspd5-1.fna&oh=00_AT-WGMjqSZ5lFrOAAJ9YaC3usi5zyw8j1elrGl96BqK9UA&oe=6359CB65" alt=" fa forhad" />
            </div>
            <div className='info'>
                <h2>FA Forhad</h2>
                <p><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>Bangladesh, Chittagong</p>
            </div>
        </div>
    );
};

export default Information;