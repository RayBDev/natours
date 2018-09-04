import React from 'react'

const Feature = props => {
  const icon = `feature-box__icon icon-${props.icon}`
  return (
    <div className="col-1-of-4">
      <div className="feature-box">
        <i className={icon} />
        <h3 className="heading-tertiary u-margin-bottom-small">
          {props.heading}
        </h3>
        <p className="feature-box__text">{props.content}</p>
      </div>
    </div>
  )
}

export default Feature
