//rfce will automatically create a function with a header componnent

import React from 'react';
import PropTypes from 'prop-types';

function Header({
    text = 'Feedback UI',
    bgColor = 'rgba(0.0.0.0.4)',
    textColor = '#ff6a95'}) 
{
    const headerStyles = {
        backgroundColor:bgColor,
        color:textColor
    }
  return (
    <header style={headerStyles}>
    <div className='container'>
        <h2>{text}</h2>
    </div>
    </header>
  )
}


Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string
}


export default Header