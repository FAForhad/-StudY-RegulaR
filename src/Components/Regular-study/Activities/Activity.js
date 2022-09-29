import React, { useEffect, useState } from 'react';
import './Activity.css'
import BreakTime from './BreakTime/BreakTime';
import Information from './Information/Information';
import StudyDetails from './StudyDetails/StudyDetails'


const Activity = ({ studyTime }) => {
    const [time, setTime] = useState(0)
    const breakTime = (time) => {
        setTime(time)
        localStorage.setItem('Break-time', time)
    }
    useEffect(() => {
        const storagevalue = localStorage.getItem('Break-time')
        setTime(storagevalue);
    }, [])
    return (
        <div className='activity'>
            <Information></Information>
            <BreakTime
                breakTime={breakTime}
            ></BreakTime>
            <StudyDetails
                time={time}
                studyTime={studyTime}
            ></StudyDetails>
        </div>
    );
};

export default Activity;