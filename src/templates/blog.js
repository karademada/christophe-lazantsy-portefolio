import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Seo from "../components/seo"
import "../pages/blog.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      body {
        raw
        references {
          contentful_id
          description
          file {
            url
          }
        }
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const imageID = node.data.target.sys.id
        const {
          file: { url },
          description,
        } = props.data.contentfulBlogPost.body.references.find(
          ({ contentful_id: id }) => id === imageID
        )
        return <img src={url} alt={description} />
      },
    },
  }
  return (
    <Layout>
      <Seo title={props.data.contentfulBlogPost.title} />
      <h3>{props.data.contentfulBlogPost.title}</h3>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(
        JSON.parse(props.data.contentfulBlogPost.body.raw),
        options
      )}
    </Layout>
  )
}

export default Blog
