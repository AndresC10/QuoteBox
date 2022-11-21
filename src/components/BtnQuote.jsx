import React from 'react'

const BtnQuote = ({ objStyleBtn, handleClick }) => {
    return (
        <button onClick={handleClick} className="card__btn" style={objStyleBtn}>&gt;</button>
    )
}

export default BtnQuote