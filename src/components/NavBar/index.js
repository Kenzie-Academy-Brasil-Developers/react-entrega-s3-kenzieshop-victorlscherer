import { useHistory } from "react-router";
import { MyToolBar, NavButton } from "./styled";

const { AppBar, Typography } = require("@mui/material")

const NavBar = () => {

    const history = useHistory();

    return (
        <AppBar position="static" >
            <MyToolBar  >
                <Typography fontSize="25px" color="yellow" >
                    Kenzie Heroes Shop
                </Typography>

                <div>
                    <NavButton variant="contained" disableRipple onClick={() => history.push("/")} >Home</NavButton>
                    <NavButton variant="contained" disableRipple onClick={() => history.push("/cart")} >Carrinho</NavButton>
                </div>

            </MyToolBar>
        </AppBar>
    )
};

export default NavBar;