import React from 'react'

import FooterLink from './FooterLink/FooterLink'
import logo1x from '../../resources/img/logo-green-1x.png'
import logo2x from '../../resources/img/logo-green-2x.png'
import logo1xSmall from '../../resources/img/logo-green-small-1x.png'
import logo2xSmall from '../../resources/img/logo-green-small-2x.png'

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
        <picture className="footer__logo">
          <source
            srcSet={`${logo1xSmall} 1x, ${logo2xSmall} 2x`}
            media="(max-width: 37.5em)"
          />
          <img srcSet={`${logo1x} 1x, ${logo2x} 2x`} alt="Full logo" src={logo2x}/>
        </picture>
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
