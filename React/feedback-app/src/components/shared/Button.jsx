import React from 'react'
import PropTypes from 'prop-types';

function Button({children, verison = 'primary', type = 'button', isDisabled=false}) {
  return (
  <button type={type} disabled={isDisabled} className={`btn btn-${verison}`}>
    {children}
  </button>
  )
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
    verison: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}

export default Button
