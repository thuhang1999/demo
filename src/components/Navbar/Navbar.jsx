import React from "react";
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, ButtonGroup } from "@material-ui/core";
import { Person, ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from 'react-router-dom';
import "./styles.css"
import logo from '../../assets/commerce.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();
    console.log('location -->', location)
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography comonent={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        Cửa hàng PNJ

                    </Typography>
                    <div className={classes.grow} />
                    {(location.pathname === '/' || location.pathname === '/home') && (
                        <div className={classes.button}>
                            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                <Badge badgeConten={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                            <IconButton component={Link} to="/sign-up" aria-label="Show cart items" color="inherit">
                                <Person />
                            </IconButton>
                        </div>)}
                </Toolbar>
                <div class="topnav">
                    <a class={location.search === "" ? "active" : ""} href="/">Trang chủ</a>
                    <a class={location.search === "?filter=nhan" ? "active" : ""} href="/home?filter=nhan">Nhẫn</a>
                    <a class={location.search === "?filter=dayco" ? "active" : ""} href="/home?filter=dayco">Dây cổ</a>
                    <a class={location.search === "?filter=vongtay" ? "active" : ""} href="/home?filter=vongtay">Vòng tay</a>
                </div>
            </AppBar>
        </>
    )

}

export default Navbar;

