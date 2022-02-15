import Typography from '@mui/material/Typography';
import Products from './Products';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
      layout: {
        padding: `${theme.spacing.unit * 8}px 0`,
        width: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
          width: 1100,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              BIENVENIDOS A H-SHOP
            </Typography>
            <p>Estos son algunos de nuestros productos:</p>
            <div className={classes.layout}>
                <Products />
            </div>
        </div>
    )
}

export default Home;