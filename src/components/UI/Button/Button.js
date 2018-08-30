import React from 'react'

const Button = props => {
  let btnClass = ''
  if (props.btnType === 'text') {
    btnClass = 'btn-text'
  } else if (props.btnType === 'main') {
    btnClass = `btn btn--${props.color} ${
      props.animated ? 'btn--animated' : null
    }`
  }
  return (
    <a href="#" className={btnClass}>
      {props.children}
    </a>
  )
}

export default Button
