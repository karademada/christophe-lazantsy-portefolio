import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Seo title="Contactez moi"/>
        <h1>Contact!</h1>
        <p>
          Contact me on
          <a
            href="https://twitter.com/christophelazan"
            target="_blank"
            rel="noreferrer"
          >
            @Twitter
          </a>
        </p>
      </Layout>
    </div>
  )
}

export default ContactPage
