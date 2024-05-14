import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import JSLogo from "../images/javascript.svg"
import ReactLogo from "../images/react.svg"
import GatsbyLogo from "../images/gatsby.svg"
import NextLogo from "../images/next.svg"
import * as style from "../styles/index.module.scss"
import { Grid, Paper } from "@mui/material"

const Index = (props) => {
  return (
    <Layout>
      <SEO title="Jack of allTrades" description="Jack of Tradesの公式サイトです" />
      <Grid container maxWidth={"lg"} sx={{mx:'auto', mt:4}}>
        <StaticImage
          src="../images/NafarroaCuriosity.png"
          alt="banner"
          quality={90}
          placeholder="blurred"
          formats={["auto", "webp", "avif"]}
          className={style.heroImg}
        />
      </Grid>

      <div className={style.container}>
        <div className={style.company}>
          <div>
            <h2>弊社について</h2>
            <p>Last Update: {props.data.contentfulLastupdate.lastupdate}</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <StaticImage
            src="../images/company.jpg"
            alt="profiel"
            quality={90}
            placeholder="blurred"
            formats={["auto", "avif", "webp"]}
          />
        </div>
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
      </div>
    </Layout>
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