import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
// import { CallMissedSharp } from "@material-ui/icons";
// import { mergeClasses } from "@material-ui/styles";
import { Link } from "react-router-dom";
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
const Cart = ({cart})=>{
    const isEmpty=!cart.line_items.length;
    const classes=useStyles();

    const EmptyCart =()=>{
        <Typography variant="subtitle1">You have no items in your shopping cart, 
            <Link to ='/' className={classes.link}>start adding some</Link>!
        
        </Typography>
    };
    const FilledCart=()=>(
        <>
            <Grid container spacing={3}>
                {cart.line_items.map(()=>(
                    <Grid item xs={12}sm={4} key={item.id}>
                        <CartItem item= {item}/>
                    </Grid>
                    
                ))}
            </Grid>
            <div className= {classes.cartDetails}>
                    <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                        <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>

                    </div>
            </div>
        </>
    )

    return(
        <Container>
            <div className={CallMissedSharp.toolbar}/>
            <Typography className={classes.title} variant ="h3" gutterBottom>Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCart/> : <FilledCart/>}
        </Container>
        
    )
}
export default Cart;
