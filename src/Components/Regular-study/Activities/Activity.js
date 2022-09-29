import React from 'react';
import './Activity.css'
import BreakTime from './BreakTime/BreakTime';
import Information from './Information/Information';

const Activity = () => {
    return (
        <div className='activity'>
            <Information></Information>
            <BreakTime></BreakTime>
        </div>
    );
};

export default Activity;