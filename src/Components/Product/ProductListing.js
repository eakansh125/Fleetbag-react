/* eslint-disable react/style-prop-object */
import { useState,useEffect } from "react";
import Filter from "./Filter";
import ProductCard from "./ProductCard";


import './ProductListing.css'

function ProductListing() {
    
    useEffect(() => {
      fetchProducts()
    }, [])
    
    const [products,setProducts] = useState([]);

     const fetchProducts = async () => {
          const axios = require('axios');
         try {
                const res = await axios.get("api/products")
                const prod = res?.data?.products
                console.log(prod)
                setProducts(prod)
                
             }
             
         catch(e) {
             console.log("In exception: ",e)
         }
     }
    
  return (
        <main className="main-view">
        <div className="main-view-container">
            <div className="product-view-container flex-row">
                
                <Filter />
                
                <div className="product-container margin-lr">
                    <div>
                        <h4 className="margin-no">Showing all products <span className="font-xs font-primary-color">(Showing 20 products)</span></h4>
                    </div>
                    
                    <div className="product-item-container flex-row align-center justify-bw">
                        
                        {
                            products.map(prod => <ProductCard title={prod.title} price={prod.price}/>)
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}

export default ProductListing;