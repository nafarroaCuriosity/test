import { styled } from "@mui/material/styles";
import { Box, List, Typography } from "@mui/material";
import "@fontsource/quicksand"



export const FooterContainer = styled(Box)(()=> ({
    background: '#e65100',
    marginTop: 12,
    padding: 12,
    height: 'auto'
}))


export const FooterList = styled(List)(()=> ({
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}))

export const FooterTitle = styled(Typography)(()=>({
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    color:'#f0f0f0',
    fontSize:'2rem',
    fontFamily:'"quicksand", "sans-serif',

}))