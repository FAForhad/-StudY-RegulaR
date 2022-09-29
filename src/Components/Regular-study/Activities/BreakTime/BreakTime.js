import React from 'react';
import './BreakTime.css'

const BreakTime = () => {
    return (
        <div className='breakTime'>
            <p>Add Your Breaks</p>
            <div className='btn-list'>
                <button>{5}m</button>
                <button>{4}m</button>
                <button>{3}m</button>
                <button>{4}m</button>
                <button>{5}m</button>
            </div>
        </div>
    );
};

export default BreakTime;