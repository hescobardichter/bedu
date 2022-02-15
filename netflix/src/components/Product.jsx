import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
      cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        margin: '10px'
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      cardContentItem: {
          marginBottom: '20px !important',
      }
}));

const Product = (props) => {

    const { title, description, image } = props; 

    const classes = useStyles();

    return(
        
            <Card className={classes.card}>
              <CardMedia
                    className={classes.cardMedia}
                    image={image} 
                    title={title}
                 />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                    <Typography>
                      {description}
                    </Typography>
                  </CardContent>
            </Card>
    );
}

export default Product;