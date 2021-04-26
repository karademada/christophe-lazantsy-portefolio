/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"


import Header from "./header"
import Footer from "./footer"

import "../styles/index.scss"
import * as layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`)
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      </div>
      <Footer authorName={data.site.siteMetadata.author}/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
