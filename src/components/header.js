import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as style from "../styles/common.module.scss"
import { AppBar, Container, List, ListItem, ListItemText } from "@mui/material"

const Header = () => {
  return (
    <AppBar position="fixed" color="inherit" elevation={'none'}>
      <Container
        maxWidth={'lg'}
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          textAlign: 'center',
          flexGrow: 1,
        }}>
        <Link to="/">
          <StaticImage
            src="../images/NafarroaLogo.svg"
            alt="logo"
            quality={90}
            placeholder="blurred"
            formats={["auto", "avif", "webp"]}
            width={180}
          />
        </Link>
        <List sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <ListItemText primary='HOME'><Link to="/" /></ListItemText>
          <ListItemText primary="Blog"><Link to="/blog" /></ListItemText>
          {/* <li><Link to="/contact">Contact</Link></li> */}
        </List>
      </Container>
    </AppBar>
  )
}

export default Header
