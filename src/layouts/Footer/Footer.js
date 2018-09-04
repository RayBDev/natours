import React from 'react'

import FooterLink from './FooterLink/FooterLink'
import logo from '../../resources/img/logo-green-2x.png'

const menuLinkDetails = {
  first: {
    name: 'Company',
    address: '#',
  },
  second: {
    name: 'Contact us',
    address: '#',
  },
  third: {
    name: 'Careers',
    address: '#',
  },
  fourth: {
    name: 'Privacy',
    address: '#',
  },
  fifth: {
    name: 'Terms',
    address: '#',
  },
}

const Footer = () => {
  let menuLinks = []
  for (let key in menuLinkDetails) {
    menuLinks.push(
      <FooterLink
        key={key}
        linkName={menuLinkDetails[key].name}
        linkAddress={menuLinkDetails[key].address}
      />
    )
  }
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={logo} alt="Full logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">{menuLinks}</ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{' '}
            <a href="#" className="footer__link">
              Ray Bernard
            </a>. Copyright &copy; by Ray Bernard. You are permitted to use this
            webpage for both personal and commercial use. However, you are not
            to claim it as your own design. A credit to the original author, Ray
            Bernard, is highly appreciated!
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
