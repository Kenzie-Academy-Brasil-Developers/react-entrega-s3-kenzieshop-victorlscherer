import { Button, Toolbar } from '@mui/material';
import styled from 'styled-components';

export const NavButton = styled(Button)({
    backgroundColor: "gray",
    color: "yellow",
    margin: "0px 10px",

})

export const MyToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})