import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as style from '../styles/blog.module.scss'

const Blog = (props) => {

  return (
    <Layout>
      <SEO  title="ブログ" description="これはブログページです" />
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>Blog</h1>
          <p>弊社サービスやお客様の声などを紹介します。</p>
          {props.data.allContentfulBlog.edges.map((singleBlog, index) => (
            <div key={index} className={style.blogCard}>
              <div className={style.textContainer}>
                <h3>{singleBlog.node.title}</h3>
                <p>{singleBlog.node.excerpt}</p>
                <p>{singleBlog.node.date}</p>
                <Link to={singleBlog.node.slug}>Read More</Link>
              </div>
              <GatsbyImage
                className={style.cardImg}
                image={singleBlog.node.image.gatsbyImageData}
                alt="card-image"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`

  query ContentfulBlogQuery {
    allContentfulBlog(sort: {date: DESC}) {
      edges {
        node {
          slug
          title
          id
          excerpt
          date(formatString: "YYYY-MM-DDY")
          image {
            gatsbyImageData(formats: AUTO, placeholder: BLURRED, quality: 90)
          }
        }
      }
    }
  }
 `