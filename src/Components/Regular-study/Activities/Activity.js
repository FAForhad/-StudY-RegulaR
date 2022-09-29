import React from 'react';
import './Activity.css'
import BreakTime from './BreakTime/BreakTime';
import Information from './Information/Information';
import StudyDetails from './StudyDetails/StudyDetails';

const Activity = () => {
    return (
        <div className='activity'>
            <Information></Information>
            <BreakTime></BreakTime>
            <StudyDetails></StudyDetails>
        </div>
    );
};

export default Activity;