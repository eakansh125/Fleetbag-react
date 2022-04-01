/* eslint-disable react/style-prop-object */
import Navbar from "../../Reusables/Navbar";
import ProductCard from "./ProductCard";
import './ProductListing.css'

function ProductListing() {
  return (
    <body>
        <Navbar />

        <main class="main-view">
        <div class="main-view-container">
            <div class="product-view-container flex-row">
                <div class="filter-container">
                    <div class="filter-head flex-row align-center justify-bw">
                        <h4>Filter</h4>
                        <a class="text-dec-none font-primary-color" href="#top">Clear</a>
                    </div>
                    <div class="filter-price">
                        <h4 class="margin-tb-xs">Price</h4>
                        <div class="flex-row justify-bw">
                            <span>50</span>
                            <span>100</span>
                            <span>200</span>
                        </div>
                        <div class="slidecontainer">
                            <input class="slider" type="range" min="1" max="100" value="50" />
                        </div>
                    </div>
                    <div class="filter-category flex-column margin-tb">
                        <h4 class="margin-tb-xs">Category</h4>
                        <div>
                            <input type="checkbox" value="men" checked="checked" />
                            <label for="Men clothing">Men clothing</label>
                        </div>
                        <div>
                            <input type="checkbox" value="women" />
                            <label for="Women clothing">Women clothing</label>
                        </div>
                    
                    </div>
                    <div class="filter-rating flex-column margin-tb">
                        <h4 class="margin-tb-xs">Rating</h4>
                        <div>
                            <input type="radio" name="rating" value="4" checked="checked" />
                            <label for="4 stars">4 stars and above</label>
                        </div>
                        <div>
                            <input type="radio" name="rating" value="3" />
                            <label for="3 stars">3 stars and above</label>
                        </div>
                        <div>
                            <input type="radio" name="rating" value="2" />
                            <label for="2 stars">2 stars and above</label>
                        </div>
                        <div>
                            <input type="radio" name="rating" value="1" />
                            <label for="1 stars">1 star and above</label>
                        </div>
                    
                    </div>
                    <div class="filter-sortby flex-column margin-tb">
                        <h4 class="margin-tb-xs">Sort by</h4>
                        <div>
                            <input type="radio" name="sortby" checked="checked" value="hightolow" />
                            <label for="high to low">Price - High to Low</label>
                        </div>
                        <div>
                            <input type="radio" name="sortby" value="lowtohigh" />
                            <label for="low to high">Price - Low to High</label>
                        </div>
                    
                    </div>
                </div>
                
                
                <div class="product-container margin-lr">
                    <div>
                        <h4 class="margin-no">Showing all products <span class="font-xs font-primary-color">(Showing 20 products)</span></h4>
                    </div>
                    <div class="product-item-container flex-row align-center justify-bw">
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