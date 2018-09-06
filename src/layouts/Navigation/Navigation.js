import React, { Component } from 'react'

import NavLink from './NavLink/NavLink'

class Navigation extends Component {
  state = {
    links: [
      {
        name: 'About Natours',
        address: '#section-about',
      },
      {
        name: 'Your benefits',
        address: '#section-features',
      },
      {
        name: 'Popular tours',
        address: '#section-tours',
      },
      {
        name: 'Testimonials',
        address: '#section-testimonials',
      },
      {
        name: 'Book now',
        address: '#section-book',
      },
    ],
    checked: false,
  }

  linkClickHandler = () => {
    let linkState = [...this.state.links]
    this.setState({
      links: linkState,
      checked: !this.state.checked,
    })
  }

  render() {
    let menuLinks = this.state.links.map((link, index) => (
      <NavLink
        key={index}
        linkName={link.name}
        linkAddress={link.address}
        linkNum={`0${index + 1}`}
        clicked={this.linkClickHandler}
      />
    ))
    return (
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
          checked={this.state.checked}
        />
        <label onClick={this.linkClickHandler} className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">{menuLinks}</ul>
        </nav>
      </div>
    )
  }
}

export default Navigation
