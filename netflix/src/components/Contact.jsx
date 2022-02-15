import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    layout: {
      padding: `${theme.spacing.unit * 8}px 0`,
      width: 'auto',
      display: 'flex',
      justifyContent: 'center',
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



const Contact = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              CONTACTO
            </Typography>
            <div className={classes.layout}>
                <p>Este es nuestro contacto:</p>
                <p> 300-000-000 o 300-000-001</p>
            </div>
        </div>
    )
}

export default Contact;