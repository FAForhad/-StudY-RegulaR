import React, { useEffect, useState } from 'react';
import './Activity.css'
import BreakTime from './BreakTime/BreakTime';
import Information from './Information/Information';
import StudyDetails from './StudyDetails/StudyDetails'
import swal from 'sweetalert'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramSuccessor, faLongArrowDown } from '@fortawesome/free-solid-svg-icons';


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


    const toast = () => {
        swal("You Added Your Activity!", `000!`, "success");
    }
    return (
        <div className='activity'>
            <Information></Information>
            <BreakTime
                breakTime={breakTime}
            ></BreakTime>
            <StudyDetails
                time={time}
                studyTime={studyTime}
                toast={toast}
            ></StudyDetails>
        </div>
    );
};

export default Activity;