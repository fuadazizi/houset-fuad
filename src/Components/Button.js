import React from 'react'
import propTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'

import "./assets/style/button.css"

export function ButtonWithHandle(props) {
  /* 
    this variant button can be used to handle onClick event
  */
  
    return (
      <button className={props.type} onClick={props.onClick} disabled={props.isDisabled}> {props.text} </button>
    )
}

ButtonWithHandle.propTypes = {
  // type button primary-button: green background, white font
  // type button secondary-button: light green background, green font
  // type button action-button: white background, green font, green border
  type: propTypes.oneOf(['primary-button', 'secondary-button', 'action-button']),
  text: propTypes.string,
  onClick: propTypes.string,
  isDisabled: propTypes.bool
};

export default function Button(props) {
  /* 
    this button can be used to navigate to another page 
    using toPage from props
  */

  const navigate = useNavigate();
  const redirectPage = () => navigate(props.toPage);

  return (
    <button className={props.type} onClick={() => redirectPage()} disabled={props.isDisabled}> {props.text} </button>
  )
}

Button.propTypes = {
  // type button primary-button: green background, white font
  // type button secondary-button: light green background, green font
  // type button action-button: white background, green font, green border
  type: propTypes.oneOf(['primary-button', 'secondary-button', 'action-button']),
  text: propTypes.string,
  onClick: propTypes.string,
  isDisabled: propTypes.bool
};


