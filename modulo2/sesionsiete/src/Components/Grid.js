import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    }
}));

function GridComp() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container className='container'>
                <Grid container spacing={3}>
                    <Grid className='gridItem' lg={3} md={4} sm={6} xs={12} item>
                        Grid 1
                    </Grid>
                    <Grid className='gridItem' lg={3} md={4} sm={6} xs={12} item>
                        Grid 2
                    </Grid>
                    <Grid className='gridItem' lg={3} md={4} sm={6} xs={12} item>
                        Grid 3
                    </Grid>
                    <Grid className='gridItem' lg={3} md={4} sm={6} xs={12} item>
                        Grid 4
                    </Grid>
                    <Grid className='gridItem' sm={6} xs={12} item>
                        Grid Item Container
                        <Grid container>
                            <Grid lg={3} md={4} sm={6} xs={12} item>
                                <div className='gridItemAnidado'>Grid 1</div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default GridComp;