import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
} from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: "10px",
      display: "flex",
    },
   logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: "20px",
      "&:hover": {
        color: "yellow",
        borderBottom: "1px solid white",
      },
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <>  
            <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    H-SHOP
                </Typography>
                <div className={classes.navlinks}>
                    Todos los derechos reservados.
                </div>
            </Toolbar>
            </AppBar>
        </>
    );
}

export default Footer;