import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Typography } from "@mui/material"

const Blog = (props) => {

  return (
    <>
      <CssBaseline />
      <Layout>
        <Seo title="Nafarroa Curiosity Blog" description="Nafarroa Curiosityのブログページです" />

        <Grid container maxWidth={"lg"} sx={{ mx: 'auto', mt: 12 }}>
          <StaticImage
            src="../images/Blog Banner.svg"
            alt="banner"
            quality={90}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
          // width={960}
          />
        </Grid>
        <Grid container maxWidth={'lg'}
          sx={{ mt: 8, mx: 'auto' }}
        >
          <Grid item
            sx={{
              display: 'grid',
              gridTemplateColumns: '345px 345px 345px',
              gap: '41px',
              mx: 'auto'
            }}
          >
            {props.data.allContentfulBlog.edges.map((singleBlog, index) => (
              <Card key={index} sx={{ maxWidth: 345 }}>
                <CardMedia>
                  <GatsbyImage
                    image={singleBlog.node.image.gatsbyImageData}
                    alt="card-image"
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5">
                    {singleBlog.node.title}
                  </Typography>
                  <Typography>
                    {singleBlog.node.date}
                  </Typography>
                  <Typography>
                    {singleBlog.node.excerpt}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={singleBlog.node.slug}>Read More</Link>
                </CardActions>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Layout>
    </>
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