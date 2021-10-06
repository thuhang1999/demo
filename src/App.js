import React, { useEffect, useState } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart, Checkout } from "./components";
import { Login, SignUp } from './components/Auth'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMesage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    // const { data } = await commerce.products.list();
    axios.get('/api/get_products').then(res=>{
      let data = res.data?.data;
      if(data){
        setProducts(data);
      }
    })
    // console.log("checkMe --> data", data);
    // setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const hanleUpdateCartQty = async (lineItemId, quantity) => {
    const { cart } = await commerce.cart.update(lineItemId, { quantity });
    setCart(cart);
  };
  const hanleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };
  const hanleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const refresCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refresCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log(cart);
  // console.log("checkMe --> fetchProducts", products);
  return (
    <Router>
      <div>
        <Navbar totalItem={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>

          <Route exact path="/cart">
            <Cart
              cart={cart}
              hanleUpdateCartQty={hanleUpdateCartQty}
              hanleRemoveFromCart={hanleRemoveFromCart}
              hanleEmptyCart={hanleEmptyCart}
            />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Router exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMesage}
            />
          </Router>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
