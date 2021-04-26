import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h1>About Page!</h1>
        <p>I am Salahdin an autodidacte developer</p>
        <Link to="/contact">Contact Me !</Link>
      </Layout>
    </div>
  )
}

export default AboutPage
