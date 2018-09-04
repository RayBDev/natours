import React from 'react'

import NavLink from './NavLink/NavLink'

const menuLinkDetails = [
  {
    name: 'About Natours',
    address: '#',
  },
  {
    name: 'Your benefits',
    address: '#',
  },
  {
    name: 'Popular tours',
    address: '#',
  },
  {
    name: 'Testimonials',
    address: '#',
  },
  {
    name: 'Book now',
    address: '#',
  },
]

const Navigation = () => {
  let menuLinks = menuLinkDetails.map((link, index) => (
    <NavLink
      key={link}
      linkName={link.name}
      linkAddress={link.address}
      linkNum={`0${index + 1}`}
    />
  ))
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">{menuLinks}</ul>
      </nav>
    </div>
  )
}

export default Navigation
