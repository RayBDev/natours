import React from 'react'

import { Form, Input } from '../../Form/Form'

const Booking = () => (
  <section className="section-book" id="section-book">
    <div className="row">
      <div className="book">
        <div className="book__form">
          <div className="u-margin-bottom-medium">
            <h2 className="heading-secondary">Start booking now</h2>
          </div>
          <Form formAction="#" btnColor="green" btnText="Next step &rarr;">
            <Input
              inputType="input"
              type="text"
              id="name"
              placeholder="Full name"
              label="Full Name"
            />
            <Input
              inputType="input"
              type="email"
              id="email"
              placeholder="Email address"
              label="Email Address"
            />
            <Input
              inputType="input"
              type="radio"
              id="small"
              name="size"
              label="Small Tour group"
            />
            <Input
              inputType="input"
              type="radio"
              id="large"
              name="size"
              label="Large Tour group"
            />
          </Form>
        </div>
      </div>
    </div>
  </section>
)

export default Booking
