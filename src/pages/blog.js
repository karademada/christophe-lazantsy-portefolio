import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as blogStyles from "./blog.module.scss"
import Seo from "../components/seo"

const Blog = () => {
  const datas = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            publishedDate(formatString: "Do MMMM, YYYY")
            body {
              references {
                contentful_id
                file {
                  url
                }
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <Seo title="Blog" />
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {datas.allContentfulBlogPost.edges.map((edge, index) => {
            console.log(edge)
            return (
              <li key={index} className={blogStyles.post}>
                <Link to={edge.node.slug}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                  <img src={edge.node.body.references[0].file.url} alt={edge.node.title} />
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default Blog
