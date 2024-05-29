import { styled } from "@mui/material/styles";
import { List, Typography } from "@mui/material";
import "@fontsource/quicksand"


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