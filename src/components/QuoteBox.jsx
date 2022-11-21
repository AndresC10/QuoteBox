import React from 'react'
import BodyCard from './BodyCard'
import BtnQuote from './BtnQuote'

const QuoteBox = ({ quoteRandom, handleClick, colorRandom }) => {

    const objStyle = {
        color: colorRandom,
    }

    const objStyleBtn = {
        backgroundColor: colorRandom,
    }

    return (
        <article className='card' style={objStyle}>
            <i className=" card__icon fa-solid fa-quote-left"></i>
            <BodyCard
                quoteRandom={quoteRandom}
            />
            <BtnQuote
                objStyleBtn={objStyleBtn}
                handleClick={handleClick}
            />
        </article>
    )
}

export default QuoteBox