import React from 'react';
import './BreakTime.css'

const BreakTime = ({ breakTime }) => {
    return (
        <div className='breakTime'>
            <h1>Add Your Breaks</h1>
            <div className='btn-list'>
                <button onClick={() => breakTime(4)}>{4}m</button>
                <button onClick={() => breakTime(6)}>{6}m</button>
                <button onClick={() => breakTime(3)}>{3}m</button>
                <button onClick={() => breakTime(4)}>{4}m</button>
                <button onClick={() => breakTime(5)}>{5}m</button>
            </div>
        </div>
    );
};

export default BreakTime;