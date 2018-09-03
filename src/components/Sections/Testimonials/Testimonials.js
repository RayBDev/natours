import React from 'react'

import Testimonial from './Testimonial/Testimonial'
import Button from '../../UI/Button/Button'
import BgVideo from '../../UI/BgVideo/BgVideo'
import testimonial1 from '../../../resources/img/nat-8.jpg'
import testimonial2 from '../../../resources/img/nat-9.jpg'
import bgmp4Video from '../../../resources/img/video.mp4'
import bgwebmVideo from '../../../resources/img/video.webm'

const testimonials = {
  testimonial1: {
    image: testimonial1,
    imageAlt: 'Person on a tour',
    imageCaption: 'Mary Smith',
    heading: 'I had the best week ever with my family',
    testimonial:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum omnis dolor optio aperiam quaerat necessitatibus eaque voluptatem tempore enim iusto tenetur, magnam sit molestias dolore dolorem non illum quo!',
  },
  testimonial2: {
    image: testimonial2,
    imageAlt: 'Person on a tour',
    imageCaption: 'Jack Wilson',
    heading: 'WOW! This was life changing!',
    testimonial:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum omnis dolor optio aperiam quaerat necessitatibus eaque voluptatem tempore enim iusto tenetur, magnam sit molestias dolore dolorem non illum quo!',
  },
}

const Testimonials = () => {
  let testimonialList = []
  for (let key in testimonials) {
    testimonialList.push(
      <Testimonial
        key={key}
        image={testimonials[key].image}
        alt={testimonials[key].imageAlt}
        imageCaption={testimonials[key].imageCaption}
        heading={testimonials[key].heading}
        testimonial={testimonials[key].testimonial}
      />
    )
  }
  return (
    <section className="section-testimonials">
      <BgVideo mp4Video={bgmp4Video} webmVideo={bgwebmVideo} />
      <div className="u-center-text u-margin-bottom-large">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>
      {testimonialList}
      <div className="u-center-text u-margin-bottom-extraLarge">
        <Button btnType="text">Read all testimonials &rarr;</Button>
      </div>
    </section>
  )
}

export default Testimonials
