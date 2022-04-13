import { useEffect, useState } from 'react';


function FetchProducts() {

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
     return products
}

export default FetchProducts