import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Blogs.css'
import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='blog-title'> <FontAwesomeIcon icon={faBlog}></FontAwesomeIcon> BlogS</h1>
            <div className='blogs'>
                <div className='blog'>
                    <h2>How dose react works?</h2>
                    <p>React is a JavaScript library for building user interfaces. React Elements creates a copy of actual DOM . If any data changes React immediately creates Virtual-DOM instead of changing actual DOM.</p>
                </div>
                <div className='blog'>
                    <h2>Differences between props and state</h2>
                    <p>Props passes the data from one component to another. Variable, function, array, object etc We can sent whit props. State update's the data in the declarable component and State is mutable it can't pass any value</p>
                </div>
                <div className='blog'>
                    <h2>What does useEffect do except using fetch?</h2>
                    <p>useEffect accepts two arguments 1st one is a function and the second argument is optional.we can use dependency in thia second argument. </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;