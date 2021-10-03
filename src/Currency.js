import React from 'react';


function Currency(props) {
    const {
        options,
        selectCurrency, 
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props 
    return (
        <div>
            <input type='number' className='input' value={amount} onChange={onChangeAmount} />
            <select value={selectCurrency} onChange={onChangeCurrency}>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default Currency;
