import * as React from 'react'
import { Link } from 'gatsby'
import { Box, Container, ListItemIcon, ListItemText } from '@mui/material'
import { FooterContainer, FooterList, FooterTitle } from '../styles/footer'

const Footer = () => {

    return (
        <FooterContainer
                // sx={{ background: '#e65100', heght: '100vh', p: 4, mt:12 }}
        >
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


        </FooterContainer>
    )
}

export default Footer
