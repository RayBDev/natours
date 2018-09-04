import React from 'react'

const Button = props => {
  let button = null
  let btnClass = ''
  let link = props.link ? props.link : '#'
  if (props.btnType === 'text') {
    button = (
      <a href={link} className="btn-text">
        {props.children}
      </a>
    )
  } else if (props.btnType === 'main') {
    btnClass = `btn btn--${props.color} ${
      props.animated ? 'btn--animated' : null
    }`
    button = (
      <a href={link} className={btnClass}>
        {props.children}
      </a>
    )
  } else {
    button = (
      <a href={link} className="btn">
        {props.children}
      </a>
    )
  }
  return button
}

export default Button
