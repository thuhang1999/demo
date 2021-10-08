import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
// import { mergeClasses } from "@material-ui/styles";
import { Link } from "react-router-dom";
import useStyles from './styles';
import { formatNumber } from '../../utils/Number'
import CartItem from './CartItem/CartItem';
const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const isEmpty = !cart.length;
    console.log('cart==', cart);
    let total = 0;
    cart.map(e => {
        total += e.product.gia * e.quantity;
    });
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">Bạn chưa có sản phẩm nào trong giỏ,thêm sản phẩm vào giỏ
            <Link to='/' className={classes.link}> tại đây</Link>!

        </Typography>
    );
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>

                ))}
            </Grid>
            <div className={classes.cartDetails}>
                <Typography variant="h4">Tổng cộng: {formatNumber(total)} đ</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClicl={handleEmptyCart}>Bỏ chọn hết</Button>
                    <Button conponent={Link} to="checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Thanh toán</Button>

                </div>
            </div>
        </>
    )

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Giỏ hàng của bạn</Typography>
            {isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>

    )
}
export default Cart;
