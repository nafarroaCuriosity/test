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
import * as style from "../styles/index.module.scss"
import { CssBaseline, Grid, Paper, ThemeProvider, Typography } from "@mui/material"
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
            className={style.heroImg}
          />
        </Grid>

        <Grid container >
          <Grid item xs={12} md={4}>
            <StaticImage
              src="../images/profiel-icon.svg"
              alt="profiel"
              quality={90}
              placeholder="blurred"
              formats={["auto", "avif", "webp"]}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h4">Curiosityの紹介</Typography>
            <Typography variant='body1'>
              映像・音響機器をコンピュータ使って制御を行う、システム開発を行ったり、

            </Typography>
          </Grid>
        </Grid>

        <div className={style.service}>
          <h2>Service</h2>
          <div className={style.serviceContainer}>
            <div><img src={JSLogo} alt="javascript" /><span>JavaScript / 10years</span></div>
            <div><img src={ReactLogo} alt="react" /><span>React / 5years</span></div>
            <div><img src={GatsbyLogo} alt="gatasby" /><span>Gatsby / 3years</span></div>
            <div><img src={NextLogo} alt="next" /><span>Next.js / 3years</span></div>
          </div>
        </div>
        <div className={style.ctaButton}>
          <Link to="/contact">Contact Us!</Link>
        </div>

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