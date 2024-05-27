import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as style from '../styles/blog.module.scss'
import { Grid } from "@mui/material"

const Blog = (props) => {

  return (
    <Layout>
      <SEO  title="Nafarroa Curiosity Blog" description="Nafarroa Curiosityのブログページです" />

      <Grid container maxWidth={"lg"} sx={{ mx: 'auto', mt: 20 }}>
          <StaticImage
            src="../images/Blog Banner.svg"
            alt="banner"
            quality={90}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
          />
        </Grid>
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