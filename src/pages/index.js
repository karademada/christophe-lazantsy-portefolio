import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <div>
    <Layout>
      <Seo title="Home" />
      <h2>Salam aleykoum</h2>
      <h3>
        I'm Salahdin Lazantsy a fullstack senior developer, living in Créteil.
      </h3>
      <p>
        Need a developer ? <Link to="/contact">Contact me!</Link>
      </p>
    </Layout>
  </div>
)

export default IndexPage
