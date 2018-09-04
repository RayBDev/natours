import React from 'react'
import Helmet from 'react-helmet'

import '../resources/fonts/icon-font.css'
import '../resources/sass/main.scss'
import favicon from '../resources/img/favicon.png'

import Aux from '../components/hoc/Aux/Aux'
import Navigation from './Navigation/Navigation'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = ({ children, data }) => (
  <Aux>
    <Helmet>
      <title>{data.site.siteMetadata.description}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="keywords" content={data.site.siteMetadata.keywords} />
      <link rel="shortcut icon" type="image/png" href={favicon} />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"
        rel="stylesheet"
      />
    </Helmet>
    <Navigation />
    <Header />
    {children()}
    <Footer />
  </Aux>
)

export default Layout

export const query = graphql`
  query MetaDataQuery {
    site {
      siteMetadata {
        description
        keywords
      }
    }
  }
`
