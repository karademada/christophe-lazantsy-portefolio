import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <div>
    <Layout>
      <Seo title="Home" />
      <h3>Bonjour à tous.</h3>
      <p>
        Je suis Christophe Lazantsy, un développeur fullstack Javascript senior, UX/UI, graphiste, architecte, photographe qui vit à Créteil.
      </p>
      <StaticImage
        src="../images/panoramique-creteil.png"
        width={750}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Vue levé de soleil panoramique de créteil, depuis le parc de créteil"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        Besoin d'un développeur ? <Link to="/contact">Contactez moi.</Link>
      </p>
    </Layout>
  </div>
)

export default IndexPage
