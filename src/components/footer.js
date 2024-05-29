import * as React from 'react'
import { Link } from 'gatsby'
import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { FooterList, FooterTitle } from '../styles/footer'

const Footer = () => {

    return (
        <Container sx={{ background: '#e65100', minWidth:'100vw', heght: '100vh', p: 4, mt:12 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FooterList>
                    <Link to='/'>
                        <ListItemIcon>
                            <ListItemText primary='HOME' />
                        </ListItemIcon>
                    </Link>

                    <Link to='/blog'>
                        <ListItemIcon>
                            <ListItemText primary='blog' />
                        </ListItemIcon>
                    </Link>
                </FooterList>
            </Box>
            

            {/* <p>{new Date().getFullYear()}Nafarroa Curiosity</p> */}
            <FooterTitle>Nafarroa Curiosity</FooterTitle>


        </Container>
    )
}

export default Footer
