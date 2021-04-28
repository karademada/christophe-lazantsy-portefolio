import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <div>
    <Layout>
      <Seo title="Home" />
      <h2>Salam aleykoum</h2>
      <h3>
        I'm Salahdin Lazantsy a fullstack senior developer, living in Créteil.
      </h3>
      {/* <img src="./images/panoramique-creteil.png" alt="Vue levé de soleil panoramique de créteil, depuis le parc de créteil" /> */}
      <StaticImage
        src="../images/panoramique-creteil.png"
        width={750}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Vue levé de soleil panoramique de créteil, depuis le parc de créteil"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        Need a developer ? <Link to="/contact">Contact me!</Link>
      </p>
    </Layout>
  </div>
)

export default IndexPage
