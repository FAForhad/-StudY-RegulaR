import React, { useEffect, useState } from 'react';
import Activity from './Activities/Activity';
import Study from './Studies/Study';
import './RegularStudy.css'
import Header from './Studies/Header/Header';
import Blogs from './Studies/Blogs/Blogs';
const RegularStudy = () => {

    const [studies, setStudies] = useState([]);
    const [studyTime, setStudyTime] = useState(0)

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
                                key={study.id}
                                study={study}
                                addToStudyTime={addToStudyTime}
                            ></Study>)
                    }
                </div>
                <Blogs></Blogs>
            </div>
            <div className='activities'>
                <Activity
                    studyTime={studyTime}
                ></Activity>
            </div>
        </div>
    );
};

export default RegularStudy;