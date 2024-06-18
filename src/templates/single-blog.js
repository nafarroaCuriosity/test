import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useTheme } from "@mui/material/styles"
import { CssBaseline, Grid, Typography, useMediaQuery } from "@mui/material"

const SingleBlog = (props) => {

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))  // md:900px

  return (
    <>
      <CssBaseline />
      <Layout>
        <Seo
          title={props.data.contentfulBlog.title}
          description={props.data.contentfulBlog.excerpt}
        />
        <Grid container maxWidth={matches ? 'md' : 'lg'} sx={{ mx: 'auto', mt: 12 }}>
          <Grid item sx={{ mx: 'auto' }}>
            <GatsbyImage
              image={props.data.contentfulBlog.image.gatsbyImageData}
              alt="blog-image"
            />
          </Grid>
        </Grid>
        <Grid cotainer maxWidth={matches ? 'sm' : 'md'} sx={{ mt: 8, mx: 'auto' }}>
          <Grid item sx={{ mx: 'auto' }}>
            <Typography variant={matches ? 'h4' : "h3"}>{props.data.contentfulBlog.title}</Typography>
          </Grid>
          <Grid item textAlign='right'>
            <Typography variant={matches ? 'caption' : "body2"}>{props.data.contentfulBlog.date}</Typography>
          </Grid>
          <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', mt: 2 }}>
            <Typography variant={matches ? 'body2' : "body1"}
              dangerouslySetInnerHTML={{
                __html: props.data.contentfulBlog.textBody.childMarkdownRemark.html
              }}
              sx={{ overflowWrap: 'break-word' }}
            />
          </Grid>
        </Grid>
      </Layout >
    </>
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
