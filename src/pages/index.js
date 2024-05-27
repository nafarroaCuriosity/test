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
import { Box, Card, CardMedia, CssBaseline, Divider, Grid, Paper, ThemeProvider, Typography } from "@mui/material"
import theme from "../styles/theme"

const Index = (props) => {
  useEffect(() => {
    document.title = 'Nafarroa Curiosity'
  }, [])
  console.log(props.data.contentfulLastupdate.lastupdate);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <SEO title="Nafarroa Curiosity" description="Nafarroa Curiosityの公式サイトです" />
        <Grid container maxWidth={"lg"} sx={{ mx: 'auto', mt: 20 }}>
          <StaticImage
            src="../images/NafarroaCuriosity.png"
            alt="banner"
            quality={90}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
          />
        </Grid>

        <Grid container maxWidth={'md'}
          sx={{ mt: 8, mx: 'auto' }}
        >

          <Card elevation='none'
            sx={{ maxWidth: 400, mx: 'auto', background: '#f0f0f0', p: 2 }}
          >
            <CardMedia sx={{ display: 'flex', justifyContent: 'center', pb: 2 }}>
              <StaticImage
                width={124}
                src="../images/profiel-icon.png"
                alt="profiel"
                quality={90}
                placeholder="blurred"
                formats={["auto", "avif", "webp"]}
              />
            </CardMedia>

            <Typography variant="h6" sx={{ml:10}}>
              {props.data.contentfulLastupdate.lastupdate}
            </Typography>

            <Divider />

            <Box sx={{ mt: 4 }}>
              <Typography variant="h4">プロフィール</Typography>
            </Box>
            <Box>
              <Typography variant='h5'>
                映像・音響機器の制御システム開発を行っています。<br />
                制御専用のハードウェアやネイティブアプリケーションでの開発を行う一方で,
                ハードウェアやOSに依存しないブラウザベースの制御システム開発にも取り組んでおり、
                フロントエンジニアとしてチャレンジしています。

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