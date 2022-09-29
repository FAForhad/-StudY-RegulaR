import React from 'react';
import './StudyDetails.css'

const StudyDetails = ({ studyTime }) => {
    return (
        <div className='studyDetails'>
            <h1>Study Details</h1>
            <div className='times'>
                <p>Study Time</p>
                <p>{studyTime} minutes</p>
            </div>
            <div className='times'>
                <p>Break Time</p>
                <p>{0} minutes</p>
            </div>
            <div className='btn-activity'>
                <button >ActivitY Comopleted</button>
            </div>
        </div>
    );
};

export default StudyDetails;