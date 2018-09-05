import React from 'react'

import Button from '../UI/Button/Button'

import Tour1 from '../../resources/img/nat-8.jpg'
import Tour2 from '../../resources/img/nat-9.jpg'

const Popup = () => (
  <div className="popup" id="popup">
    <div className="popup__content">
      <div className="popup__left">
        <img src={Tour1} alt="Tour photo" className="popup__img" />
        <img src={Tour2} alt="Tour photo" className="popup__img" />
      </div>
      <div className="popup__right">
        <a href="#section-tours" className="popup__close">
          &times;
        </a>
        <h2 className="heading-secondary u-margin-bottom-small">
          Start booking now
        </h2>
        <h3 className="heading-tertiary u-margin-bottom-small">
          Important &ndash; Please read these terms before booking
        </h3>
        <p className="popup__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus
          et malesuada fames ac. Eget mi proin sed libero enim sed. Gravida
          rutrum quisque non tellus orci ac. Phasellus egestas tellus rutrum
          tellus pellentesque eu tincidunt tortor aliquam. Lectus nulla at
          volutpat diam ut venenatis tellus. In arcu cursus euismod quis viverra
          nibh cras pulvinar. Ut ornare lectus sit amet est. In ante metus
          dictum at tempor. Laoreet id donec ultrices tincidunt arcu non sodales
          neque. Aliquet sagittis id consectetur purus ut faucibus pulvinar
          elementum.
        </p>
        <div className="popup__button">
          <Button btnType="main" color="green" animated={true}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  </div>
)

export default Popup
