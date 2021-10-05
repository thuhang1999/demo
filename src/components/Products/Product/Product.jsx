import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  console.log(product);
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.hinh_anh}
        title={product.ten_hang}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="hS" gutterBottom>
            {product.ten_hang}
          </Typography>
          <Typography variant="hS">
            {product.gia}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.mo_ta }}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label="Add to Card"
          onClick={() => onAddToCart(product.ma_hang, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Product;
