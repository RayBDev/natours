import React from 'react'

import Button from '../../components/UI/Button/Button'
import logoWhite from '../../resources/img/logo-white.png'

const Header = () => (
  <header className="header">
    <div className="header__logo-box">
      <img src={logoWhite} alt="Natours Logo" className="header__logo" />
    </div>
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">Outdoors</span>
        <span className="heading-primary--sub">is where life happens</span>
      </h1>
      <Button
        btnType="main"
        color="white"
        animated={true}
        link="#section-tours"
      >
        Discover our tours
      </Button>
    </div>
  </header>
)

export default Header
