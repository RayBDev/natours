import React from 'react'

import Button from '../../../UI/Button/Button'

const Tour = props => {
  const pictureClass = `card__picture card__picture--${props.cardNumber}`
  const headingClass = `card__heading-span card__heading-span--${
    props.cardNumber
  }`
  const cardBackClass = `card__side card__side--back card__side--back-${
    props.cardNumber
  }`
  let cardDetails = []
  for (let feature in props.features) {
    cardDetails.push(<li key={feature}>{props.features[feature]}</li>)
  }

  return (
    <div className="col-1-of-3">
      <div className="card">
        <div className="card__side card__side--front">
          <div className={pictureClass}>&nbsp;</div>
          <h4 className="card__heading">
            <span className={headingClass}>{props.heading}</span>
          </h4>
          <div className="card__details">
            <ul>{cardDetails}</ul>
          </div>
        </div>
        <div className={cardBackClass}>
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">{props.price}</p>
            </div>
            <Button
              btnType="main"
              color="white"
              animated={true}
              link={props.link}
            >
              Book now!
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tour
