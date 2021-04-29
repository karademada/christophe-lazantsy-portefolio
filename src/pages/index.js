import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <div>
    <Layout>
      <Seo title="Home" />
      <h2>Salam aleykoum, Shalom, Salut, Yo...</h2>
      <h3>
        Je suis Christophe Lazantsy un fullstack Javascript senior développeur (purée qu'est ce que c'est pompeux), et j'ai pas finis, UX/UI, graphiste, architecte, Photographe qui vit à Créteil.
      </h3>
      <StaticImage
        src="../images/panoramique-creteil.png"
        width={750}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Vue levé de soleil panoramique de créteil, depuis le parc de créteil"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        Besoin d'un développeur ? <Link to="/contact">Contactez moi ici.</Link>
      </p>
    </Layout>
  </div>
)

export default IndexPage
