import { Grid,Button,Card,CardContent } from '@mui/material';
import React from 'react';

const MobileItem = ({item }) => {
    return (
        <Grid item xs={3}>
        <Card sx={{}}>
            <CardContent>
            <img src={item.img} height={"250px"} width={"250px"} alt="" />
            <h3>{item.brand}</h3>
            <h4>{item.model}={item.storage}</h4>
            <Button variant="contained" >{item.Price}</Button>
            <Button variant='contained'  sx={{marginLeft:"4px"}}>Delete</Button>
            </CardContent>
        </Card>
           
        </Grid>
    );
};

export default MobileItem;