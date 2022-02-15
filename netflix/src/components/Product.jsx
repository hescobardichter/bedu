import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
      cardTitle: {
        fontSize: '22px !important', 
        overflow: 'hidden',
        height: '58px',

      },
      cardContentGeneral: {
        flexGrow: 1,
      },
      cardContent: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        height: '100px',
      },
      cardContentItem: {
          marginBottom: '20px !important',
      }
}));

const Product = (props) => {

    const { title, description, image } = props; 
    const [ count, setCount ] = useState(0);
    const classes = useStyles();

    const changeCounter = (value) => {
      const counter = count + value;
      setCount(counter)
      if(count <= 0 && value <= 0){
        setCount(0)
      }
    }

    return(
        
            <Card className={classes.card}>
              <CardMedia
                    className={classes.cardMedia}
                    image={image} 
                    title={title}
                 />
                  <CardContent className={classes.cardContentGeneral}>
                    <Typography  className={classes.cardTitle} gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                    <Typography className={classes.cardContent}>
                      {description}
                    </Typography>
                  </CardContent>
                  <CardActions> 
                      <Button onClick={() => { changeCounter(1) }}>+</Button>
                      <div>{count}</div>
                      <Button  onClick={() => { changeCounter(-1) }}>-</Button>
                  </CardActions>
            </Card>
    );
}

export default Product;