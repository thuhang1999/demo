import React, { useEffect, useState } from 'react';
import { commerce } from './lib/commerce';

//import Products from './components/Products/Products';
//import Navbar from './components/Navbar/Navbar';
import {Products, Navbar} from './components';
const App = () => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async() => {
        const {data} = await commerce.products.list();
        // console.log("checkMe --> data", data);
        setProducts(data);

    }
    useEffect(() => {
        fetchProducts();
    }, []
    );
    // console.log("checkMe --> fetchProducts", products);
    return (
    <div>
        <Navbar />
        <Products products={products}/>
    </div>
    )

}
export default App;