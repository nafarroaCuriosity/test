import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useTheme } from "@mui/material/styles"
import { ListItemIcon, ListItemText, useMediaQuery } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { AppbarContainer, AppbarHeader, Mylist } from "../styles/Appbar";
import theme from "../styles/theme"

const Header = () => {

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))  // md:900px

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
          // width={matches ? "120px" : "180px"}
          />
        </Link>
      </AppbarHeader>
      <Mylist>
        <Link to="/">
          <ListItemIcon sx={{ px: 4, alignItems: 'center' }}>
            <HomeIcon />
            <ListItemText
              sx={{ pl: 2 }}
              primaryTypographyProps={{ fontSize: matches ? '0.8rem' : '1rem' }}
              primary='HOME'
            />
          </ListItemIcon>
        </Link>

        <Link to="/blog">
          <ListItemIcon sx={{ px: 4, alignItems: 'center' }}>
            <BorderColorIcon />
            <ListItemText
              sx={{ pl: 2 }}
              primaryTypographyProps={{ fontSize: matches ? '0.8rem' : '1rem' }}
              primary='blog'
            />
          </ListItemIcon>
        </Link>
      </Mylist>
    </AppbarContainer>
  )
}

export default Header
