import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
    },
    heroButtons: {
        justifyContent: 'center',
        display: 'flex',
    },
    link: {
        color: 'white'
    }
}));

const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              H-SHOP
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Creada por Hugo Escobar, donde encontrara lo que necesite.
            </Typography>
            <div className={classes.heroButtons}>
            <Button variant="contained" color="primary">
                      <a className={classes.link} href="https://www.linkedin.com/in/hugoescobar95/">
                        LinkedIn
                      </a>
                  </Button>
            </div>
          </div>
        </div>
    )
}

export default About;