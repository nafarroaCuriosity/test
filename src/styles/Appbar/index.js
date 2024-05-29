import { styled } from "@mui/material/styles";
import { Box, List } from "@mui/material";



export const AppbarContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
}))

export const AppbarHeader = styled(Box)(()=> ({
    width: 180,
    padding: 8,
    display:'flex',
    flexGrow: 1,
    justifyContent:'center'
}))

export const Mylist = styled(List)(() => ({
    display: 'flex',
    flexGrow: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',   

}))