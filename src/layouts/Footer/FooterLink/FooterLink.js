import React from 'react'

const FooterLink = props => (
  <li className="footer__item">
    <a href={props.linkAddress} className="footer__link">
      {props.linkName}
    </a>
  </li>
)

export default FooterLink
