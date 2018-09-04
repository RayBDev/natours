import React from 'react'

import Button from '../UI/Button/Button'

export const Form = props => (
  <form action={props.formAction} className="form">
    {props.children}
    <div className="form__group u-margin-top-medium">
      <Button btnType="main" color={props.btnColor} animated={true}>
        {props.btnText}
      </Button>
    </div>
  </form>
)

export const Input = props => {
  let inputElement = null

  //Create input elements according to type
  switch (props.inputType) {
    case 'input':
      if (props.type === 'text' || props.type === 'email') {
        inputElement = (
          <div className="form__group">
            <input
              type={props.type}
              className="form__input"
              placeholder={props.placeholder}
              id={props.id}
              required
            />
            <label htmlFor={props.id} className="form__label">
              {props.label}
            </label>
          </div>
        )
      } else if (props.type === 'radio') {
        inputElement = (
          <div className="form__radio-group">
            <input
              type={props.type}
              className="form__radio-input"
              id={props.id}
              name={props.name}
            />
            <label htmlFor={props.id} className="form__radio-label">
              <span className="form__radio-button" />
              {props.label}
            </label>
          </div>
        )
      }

      break
    default:
      inputElement = null
  }

  return inputElement
}

export default Form
