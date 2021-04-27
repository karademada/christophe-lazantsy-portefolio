import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as blogStyles from "./blog.module.scss"

const Blog = () => {
  const datas = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  console.log(datas)
  return (
    <div>
      <Layout>
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {datas.allMarkdownRemark.edges.map(edge => {
            return (
              <li className={blogStyles.post}>
                <Link to={edge.node.fields.slug}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
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
