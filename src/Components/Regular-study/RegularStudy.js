import React, { useEffect, useState } from 'react';
import Activity from './Activities/Activity';
import Study from './Studies/Study';
import './RegularStudy.css'
import Header from './Studies/Header/Header';

const RegularStudy = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('study.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className='regular-study'>
            <div className='studies'>
                <Header></Header>
                <div className='books'>
                    {
                        books.map((book) =>
                            <Study
                                book={book}
                                key={book.id}
                            ></Study>)
                    }
                </div>
            </div>
            <div className='activities'>
                <Activity></Activity>
            </div>
        </div>
    );
};

export default RegularStudy;