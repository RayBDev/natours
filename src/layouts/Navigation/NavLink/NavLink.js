import React from 'react'

const NavLink = props => (
  <li className="navigation__item">
    <a href={props.linkAddress} className="navigation__link">
      <span>{props.linkNum}</span>
      {props.linkName}
    </a>
  </li>
)

export default NavLink
