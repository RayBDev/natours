import React from 'react'

const Button = props => {
  let button = null
  let btnClass = ''
  if (props.btnType === 'text') {
    button = (
      <a href="#" className="btn-text">
        {props.children}
      </a>
    )
  } else if (props.btnType === 'main') {
    btnClass = `btn btn--${props.color} ${
      props.animated ? 'btn--animated' : null
    }`
    button = (
      <button href="#" className={btnClass}>
        {props.children}
      </button>
    )
  } else {
    button = (
      <button href="#" className="btn">
        {props.children}
      </button>
    )
  }
  return button
}

export default Button
