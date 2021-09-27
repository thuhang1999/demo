import React from "react";
import{Typography, Button, Cart, CartAction, CartContent, CartMedia} from '@material-ui/core';
import useStyles from './styles';

const CartItem=({item})=>{
    const classes=useStyles();
    return(
        <Cart>
            <CartMedia image={item.media.source} alt={item.name} className={classes.media}/>
            <CartContent className={classes.cartContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CartContent>
            <CartAction className={classes.cartAction}>
                <div className={classes.buttons}>
                    <Button type='button' size='small'>-</Button>
                    <Typography>{item.quanity}</Typography>
                    <Button type='button' size='small'>+</Button>

                </div>
                <Button variant='contained' type='button' color='secondary'>Remove</Button>
            </CartAction>
        </Cart>
    )


}
export default CartItem
