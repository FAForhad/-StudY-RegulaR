
import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Study.css'

const Study = (props) => {
    const { key, study, addToStudyTime } = props;
    console.log(key)
    const { duration, name, picture, about } = study;
    return (
        <div className='study'>
            <div className='studyCard'>
                <img src={picture} alt="" />
                <h2 className='details'>{name}</h2>
                <p className='details'> {about}</p>
                <h4 className='details'>Duration : {duration} minutes </h4>
                <button className='btn-addList details' onClick={() => addToStudyTime(duration)}>
                    <p>Add To List</p>
                    <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Study;