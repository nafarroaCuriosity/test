import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as style from '../styles/singleBlog.module.scss'
import { Grid, Typography } from "@mui/material"

const SingleBlog = (props) => {

  return (
    <Layout>
      <SEO
        title={props.data.contentfulBlog.title}
        description={props.data.contentfulBlog.excerpt}
      />
      <Grid container maxWidth={'lg'} sx={{ mx: 'auto', mt: 12 }}>
        <Grid item sx={{ mx: 'auto' }}>
          <GatsbyImage
            image={props.data.contentfulBlog.image.gatsbyImageData}
            alt="blog-image"
          />
        </Grid>
      </Grid>
      <Grid cotainer maxWidth={'md'} sx={{ mt: 8, mx: 'auto' }}>

        <Typography variant="h3">{props.data.contentfulBlog.title}</Typography>
        <Typography variant="h5">{props.data.contentfulBlog.date}</Typography>
        <Typography variant="body1"
          dangerouslySetInnerHTML={{
            __html: props.data.contentfulBlog.textBody.childMarkdownRemark.html
          }}
        />

      </Grid>
    </Layout>
  )
}

export default SingleBlog

export const query = graphql`
  query ContentfulSingleBlogQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug}) {
      title
      excerpt
      date(formatString: "YYYY-MM-DD")
      image {
        gatsbyImageData(formats: AUTO, placeholder: BLURRED, quality: 90, width: 1000)
      }
      textBody {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
