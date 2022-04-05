import './ProductListing.css';

function ProductCard({title, price}) {
  return (
            <div className="card card-xs light-gray-shadow margin-tb relative">
                            <div className="card-upper">
                                <div className="image-vertical-xs">
                                    <img src="/img/pexels-ron-lach-10397680.jpg" alt="product" />
                                </div>
                                <div className="text align-center justify-bw">
                                    <div className="text-heading flex-column align-center">
                                        <p className="margin-no">{title}</p>
                                        <h3 className="font-bold font-xl margin-tb-xs">${price}</h3>
                                    </div>
                                </div>
                    
                            </div>
                            <div className="card-lower ">
                                <div className="card-footer-wishlist width-full">
                                    <button className="btn-small width-full margin-no">ADD TO CART</button>
                                    <button className="btn-text width-full margin-no">MOVE TO WISHLIST</button>
                                </div>
                            </div>
                            
                        </div>
  );
}

export default ProductCard;