import React from 'react'
import Helmet from 'react-helmet'

import '../resources/sass/main.scss';
import favicon from '../resources/img/favicon.png'

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.description}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="keywords" content={data.site.siteMetadata.keywords} />
      <link rel="shortcut icon" type="image/png" href={favicon}/>
      <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet"></link>
    </Helmet>
      {children()}
  </div>
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
