import React, { useEffect, useState } from 'react';
import { commerce } from './lib/commerce';

//import Products from './components/Products/Products';
//import Navbar from './components/Navbar/Navbar';
import {Products, Navbar, Cart} from './components';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useStage({});

    const fetchProducts = async() => {
        const {data} = await commerce.products.list();
        // console.log("checkMe --> data", data);
        setProducts(data);

    }
    const fetchCart = async() =>{
        setcart (await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productID, quantity) =>{
        const item =await commerce.cart.add(productID, quantity);
        setCart (item.cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []
    );
    console.log(cart)
    // console.log("checkMe --> fetchProducts", products);
    return (
        <Router>
            <div>
                <Navbar totalItem={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={handleAddToCart}/>
                    </Route>

                    <Route exact path="/cart">
                        <Cart cart={cart}/>
                    </Route>
                </Switch>

            </div>
        </Router>

    );

}
export default App;