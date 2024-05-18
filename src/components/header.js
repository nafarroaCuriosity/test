import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as style from "../styles/common.module.scss"
import { AppBar, Button, Container, List, ListItem, ListItemText } from "@mui/material"
import { Colors } from "../styles/theme"

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
          <ListItem components={Button}>
            <Link to="/">
              <ListItemText
                primary='HOME'
                primaryTypographyProps={{
                  fontSize: '2rem'
                }}
              />
            </Link>
          </ListItem>
          <ListItem components={Button}>
            <Link to="/blog">
              <ListItemText
                primary='blog'
                primaryTypographyProps={{
                  fontSize: '2rem'
                }}
              />
            </Link>
          </ListItem>
        </List>
      </Container>
    </AppBar>
  )
}

export default Header
