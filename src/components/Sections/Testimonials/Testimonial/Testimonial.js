import React from 'react'

const Testimonial = props => (
    <div className="row">
        <div className="testimonial">
            <figure className="testimonial__shape">
            <img
                src={props.image}
                alt={props.alt}
                className="testimonial__img"
            />
            <figcaption className="testimonial__caption">
                {props.imageCaption}
            </figcaption>
            </figure>
            <div className="testimonial__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
                {props.heading}
            </h3>
            <p>{props.testimonial}</p>
            </div>
        </div>
  </div>
)

export default Testimonial
