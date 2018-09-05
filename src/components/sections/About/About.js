import React from 'react'

import Button from '../../UI/Button/Button'
import photo1 from '../../../resources/img/nat-1.jpg'
import photo2 from '../../../resources/img/nat-2.jpg'
import photo3 from '../../../resources/img/nat-3.jpg'
import photo1Large from '../../../resources/img/nat-1-large.jpg'
import photo2Large from '../../../resources/img/nat-2-large.jpg'
import photo3Large from '../../../resources/img/nat-3-large.jpg'

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
          totam, aliquam voluptate excepturi temporibus culpa eveniet.
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
          srcSet={`${photo1} 300w, ${photo1Large} 1000w`} 
          sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" 
          alt="Photo 1" 
          className="composition__photo composition__photo--p1" 
          src={photo1}
        />
        <img 
          srcSet={`${photo2} 300w, ${photo2Large} 1000w`} 
          sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" 
          alt="Photo 2" 
          className="composition__photo composition__photo--p2" 
          src={photo2}
        />
        <img 
          srcSet={`${photo3} 300w, ${photo3Large} 1000w`} 
          sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" 
          alt="Photo 3" 
          className="composition__photo composition__photo--p3" 
          src={photo3}
        />
        </div>
      </div>
    </div>
  </section>
)

export default About
