import React from 'react'

import Button from '../../UI/Button/Button'
import Photo1 from '../../../resources/img/nat-1-large.jpg'
import Photo2 from '../../../resources/img/nat-2-large.jpg'
import Photo3 from '../../../resources/img/nat-3-large.jpg'

const About = () => (
  <section className="section-about">
    <div className="u-center-text u-margin-bottom-large">
      <h2 className="heading-secondary">
        Exciting tours for adventurous people
      </h2>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <h3 className="heading-tertiary u-margin-bottom-small">
          You're going to fall in love with nature
        </h3>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          molestiae quaerat aliquid sequi veritatis vero debitis ullam neque
          totam, aliquam voluptate excepturi temporibus culpa eveniet, facere
          dolor odio cupiditate assumenda.
        </p>
        <h3 className="heading-tertiary u-margin-bottom-small">
          Live adventures like you never have before
        </h3>
        <p className="paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          facere suscipit quo natus quasi voluptates a reiciendis beatae.
        </p>
        <Button btnType="text">Learn more &rarr;</Button>
      </div>
      <div className="col-1-of-2">
        <div className="composition">
          <img
            src={Photo1}
            alt="Photo 1"
            className="composition__photo composition__photo--p1"
          />
          <img
            src={Photo2}
            alt="Photo 2"
            className="composition__photo composition__photo--p2"
          />
          <img
            src={Photo3}
            alt="Photo 3"
            className="composition__photo composition__photo--p3"
          />
        </div>
      </div>
    </div>
  </section>
)

export default About
