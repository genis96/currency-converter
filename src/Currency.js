import React from 'react';


function Currency(props) {
    const {
        options
    } = props 
    return (
        <div>
            <input type='number' className='input'/>
            <select>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default Currency;
