import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./styles";
import { formatNumber } from "../../../utils/Number";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  console.log("{checkMe} TCL --> item:", item);
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        image={item.product.hinh_anh}
        alt={item.product.ten_hang}
        className={classes.media}
      />
      <CardContent className={classes.cartContent}>
        <Typography variant="h4">{item.product.ten_hang}</Typography>
        <Typography variant="h5">
          {formatNumber(item.product.gia)}
        </Typography>
      </CardContent>
      <CardActions className={classes.cartAction}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCartQty(item.id, item.quanity - 1)}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCartQty(item.id, item.quanity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => onRemoveFromCart(item.id)}
        >
          Xoá
        </Button>
      </CardActions>
    </Card>
  );
};
export default CartItem;
