
import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Study.css'

const Study = (props) => {
    const { key, book } = props;
    console.log(key)
    const { duration, name, picture, about } = book;
    return (
        <div className='study'>
            <div className='studyCard'>
                <img src={picture} alt="" />
                <h2 className='details'>{name}</h2>
                <p className='details'> {about}</p>
                <h4 className='details'>Duration : {duration} minutes </h4>
                <button className='btn-addList details' >
                    <p>Add To List</p>
                    <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Study;