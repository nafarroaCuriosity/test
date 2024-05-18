import * as React from "react"
import { useEffect } from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import JSLogo from "../images/javascript.svg"
import ReactLogo from "../images/react.svg"
import GatsbyLogo from "../images/gatsby.svg"
import NextLogo from "../images/next.svg"
import { Box, Card, CardMedia, CssBaseline, Grid, Paper, ThemeProvider, Typography } from "@mui/material"
import theme from "../styles/theme"

const Index = (props) => {
  useEffect(() => {
    document.title = 'Nafarroa Curiosity'
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <SEO title="Jack of allTrades" description="Jack of Tradesの公式サイトです" />
        <Grid container maxWidth={"lg"} sx={{ mx: 'auto', mt: 20 }}>
          <StaticImage
            src="../images/NafarroaCuriosity.png"
            alt="banner"
            quality={90}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
          />
        </Grid>

        <Grid container
          sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}
        >

          <Card elevation='none'
          // sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box sx={{ml:18}}>
              <StaticImage
                width={124}
                src="../images/profiel-icon.png"
                alt="profiel"
                quality={90}
                placeholder="blurred"
                formats={["auto", "avif", "webp"]}
              />
            </Box>
            <Box sx={{ mt: 4 }}>
              <Typography variant="h4">Curiosityの紹介</Typography>
            </Box>
            <Box>
              <Typography variant='h6'>
                映像・音響機器をコンピュータ使って制御を行う、システム開発を行ったり、
              </Typography>
            </Box>
          </Card>
        </Grid>


      </Layout>
    </ThemeProvider >
  )
}

export default Index

export const query = graphql`
  query IndexQuery {
    contentfulLastupdate {
      lastupdate(formatString: "YYYY-MM-DD")
    }
  }
`