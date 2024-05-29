import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { ListItemIcon, ListItemText } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { AppbarContainer, AppbarHeader, Mylist } from "../styles/Appbar";

const Header = () => {
  return (
    <AppbarContainer>
      <AppbarHeader>
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
      </AppbarHeader>
      <Mylist>
        <Link to="/">
          <ListItemIcon sx={{ px: 4, alignItems: 'center' }}>
            <HomeIcon />
            <ListItemText sx={{ pl: 2 }} primary='HOME' />
          </ListItemIcon>
        </Link>

        <Link to="/blog">
          <ListItemIcon sx={{ px: 4, alignItems: 'center' }}>
            <BorderColorIcon />
            <ListItemText sx={{ pl: 2 }} primary='blog' />
          </ListItemIcon>
        </Link>
      </Mylist>
    </AppbarContainer>
  )
}

export default Header
