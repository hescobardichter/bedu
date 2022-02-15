import Product from "./Product";
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { getProducts } from '../services/product.service';

const useStyles = makeStyles((theme) => ({
    cardContentItem: {
        marginBottom: '20px !important',
    }
}));

const Products = () => {

    const classes = useStyles();
    
    const [products, setProducts] = useState([]);

    useEffect(() => {

        getProducts().then((res) => {
            setProducts(res);
        });

    }, [])


    return(
        <>
          { products.length > 0 ?
            products.map((product, key) => (
                <Grid className={classes.cardContentItem} item key={product.id} sm={6} md={4} lg={3}>
                    <Product id={product.id} title={product.title} image={product.image} description={product.description} />
                </Grid>
            ))
            :
            <p>Cargando Productos</p>
          }
        </>
    );
}

export default Products;