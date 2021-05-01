import React, { useState } from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

const AboutPage = props => {
  const file = './sample.pdf';
  const [numPages, setNumPages] = useState(null);


  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  const datas = useStaticQuery(graphql`
    query {
      contentfulAboutPage {
        title
        slug
        body {
          raw
        }
        aboutPicture {
          file {
            url
          }
          gatsbyImageData
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <Seo title="A propos" />
        <h3>{datas.contentfulAboutPage.title}</h3>
        <img src={datas.contentfulAboutPage.aboutPicture.file.url} alt={datas.contentfulAboutPage.aboutPicture.title} />

        {documentToReactComponents(
          JSON.parse(datas.contentfulAboutPage.body.raw),
          {}
        )}
        <Link to="/contact">Contactez moi.</Link>
      </Layout>
    </div>
  )
}

export default AboutPage
