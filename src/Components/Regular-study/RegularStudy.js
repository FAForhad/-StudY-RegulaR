import React, { useEffect, useState } from 'react';
import Activity from './Activities/Activity';
import Study from './Studies/Study';
import './RegularStudy.css'
import Header from './Studies/Header/Header';
import StudyDetails from './Activities/StudyDetails/StudyDetails';

const RegularStudy = () => {

    const [studies, setStudies] = useState([]);
    const [studyTime, setStudyTime] = useState(0)
    console.log(studyTime)

    const addToStudyTime = (duration) => {
        setStudyTime(duration + studyTime);

    }

    useEffect(() => {
        fetch('study.json')
            .then(res => res.json())
            .then(data => setStudies(data))
    }, [])

    return (
        <div className='regular-study'>
            <div className='studies'>
                <Header></Header>
                <div className='books'>
                    {
                        studies.map((study) =>
                            <Study
                                study={study}
                                addToStudyTime={addToStudyTime}
                            ></Study>)
                    }
                </div>
            </div>
            <div className='activities'>
                <Activity></Activity>
                <StudyDetails
                    studyTime={studyTime}
                ></StudyDetails>
            </div>
        </div>
    );
};

export default RegularStudy;