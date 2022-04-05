function Filter() {
  return (
    <div className="filter-container">
                    <div className="filter-head flex-row align-center justify-bw">
                        <h4>Filter</h4>
                        <a className="text-dec-none font-primary-color" href="#top">Clear</a>
                    </div>
                    <div className="filter-price">
                        <h4 className="margin-tb-xs">Price</h4>
                        <div className="flex-row justify-bw">
                            <span>50</span>
                            <span>100</span>
                            <span>200</span>
                        </div>
                        <div className="slidecontainer">
                            <input className="slider" type="range" min="1" max="100" defaultValue="50" />
                        </div>
                    </div>
                    <div className="filter-category flex-column margin-tb">
                        <h4 className="margin-tb-xs">Category</h4>
                        <div>
                            <input type="checkbox" value="men" defaultChecked="checked" />
                            <label htmlFor="Men clothing">Men clothing</label>
                        </div>
                        <div>
                            <input type="checkbox" value="women" />
                            <label htmlFor="Women clothing">Women clothing</label>
                        </div>
                    
                    </div>
                    <div className="filter-rating flex-column margin-tb">
                        <h4 className="margin-tb-xs">Rating</h4>
                        <div>
                            <input type="radio" name="rating" value="4" defaultChecked="checked" />
                            <label htmlFor="4 stars">4 stars and above</label>
                        </div>
                        <div>
                            <input type="radio" name="rating" value="3" />
                            <label htmlFor="3 stars">3 stars and above</label>
                        </div>
                        <div>
                            <input type="radio" name="rating" value="2" />
                            <label htmlFor="2 stars">2 stars and above</label>
                        </div>
                        <div>
                            <input type="radio" name="rating" value="1" />
                            <label htmlFor="1 stars">1 star and above</label>
                        </div>
                    
                    </div>
                    <div className="filter-sortby flex-column margin-tb">
                        <h4 className="margin-tb-xs">Sort by</h4>
                        <div>
                            <input type="radio" name="sortby" defaultChecked="checked" value="hightolow" />
                            <label htmlFor="high to low">Price - High to Low</label>
                        </div>
                        <div>
                            <input type="radio" name="sortby" value="lowtohigh" />
                            <label htmlFor="low to high">Price - Low to High</label>
                        </div>
                    
                    </div>
                </div>
  );
}

export default Filter;