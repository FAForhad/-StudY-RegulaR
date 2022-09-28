import React from 'react';
import Header from './Header/Header';
import './Study.css'

const Study = (props) => {
    const { key, book } = props
    console.log(key, book)
    return (
        <div className='study'>
            <div className='studyCard'>
                <div>
                    <h2>Name : { }</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit dolorem, culpa magnam eius asperiores qui, sit quasi vel ipsum adipisci voluptates hic architecto. Sint atque enim ab voluptatibus fuga animi.</p>
                    <h4>Duration : </h4>
                </div>
            </div>
        </div>
    );
};

export default Study;