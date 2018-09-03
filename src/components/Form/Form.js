import React from 'react'

import Button from '../UI/Button/Button'

const Form = props => (
  <form action="#" className="form">
    <div className="form__group">
      <input
        type="text"
        className="form__input"
        placeholder="Full name"
        id="name"
        required
      />
      <label htmlFor="name" className="form__label">
        Full Name
      </label>
    </div>
    <div className="form__group">
      <input
        type="email"
        className="form__input"
        placeholder="Email address"
        id="email"
        required
      />
      <label htmlFor="email" className="form__label">
        Email Address
      </label>
    </div>
    <div className="form__group u-margin-bottom-medium">
      <div className="form__radio-group">
        <input
          type="radio"
          className="form__radio-input"
          id="small"
          name="size"
        />
        <label htmlFor="small" className="form__radio-label">
          <span className="form__radio-button" />
          Small Tour group
        </label>
      </div>
      <div className="form__radio-group">
        <input
          type="radio"
          className="form__radio-input"
          id="large"
          name="size"
        />
        <label htmlFor="large" className="form__radio-label">
          <span className="form__radio-button" />
          Large Tour group
        </label>
      </div>
    </div>
    <div className="form__group">
      <Button btnType="main" color="green" animated={true}>
        Next step &rarr;
      </Button>
    </div>
  </form>
)

export default Form
