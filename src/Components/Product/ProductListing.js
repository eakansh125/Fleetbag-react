/* eslint-disable react/style-prop-object */
import Filter from "./Filter";
import ProductCard from "./ProductCard";

import './ProductListing.css'

function ProductListing() {
  return (
    <body>
        <main className="main-view">
        <div className="main-view-container">
            <div className="product-view-container flex-row">
                
                <Filter />
                
                <div className="product-container margin-lr">
                    <div>
                        <h4 className="margin-no">Showing all products <span className="font-xs font-primary-color">(Showing 20 products)</span></h4>
                    </div>
                    <div className="product-item-container flex-row align-center justify-bw">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                    
                </div>
            </div>
        </div>
    </main>

    </body>
  );
}

export default ProductListing;