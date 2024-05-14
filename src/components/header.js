import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as style from "../styles/common.module.scss"
import { Container, List, ListItem } from "@mui/material"

const Header = () => {
  return (
    <Container 
    maxWidth={'lg'}  
    sx={{
      display:'flex', 
      justifyContent:'flex-start', 
      textAlign:'center',
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
          <List sx={{display:'flex', justifyContent:'center', alignItems: 'center', textAlign:'center'}}>
            <ListItem><Link to="/blog">Blog</Link></ListItem>
            {/* <li><Link to="/contact">Contact</Link></li> */}
          </List>
    </Container>
  )
}

export default Header
