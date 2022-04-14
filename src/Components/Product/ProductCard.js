import { useCartWishlist } from '../../Context/cart-context';
import './ProductListing.css';

function ProductCard({prod}) { 
    const {state: {cart, wishlist}, dispatch} = useCartWishlist();
    console.log(wishlist)
  return (
            <div className="card card-xs light-gray-shadow margin-tb relative">
                            <div className="card-upper">
                                <div className="image-vertical-xs">
                                    <img src="/img/pexels-ron-lach-10397680.jpg" alt="product" />
                                </div>
                                <div className="text align-center justify-bw">
                                    <div className="text-heading flex-column align-center">
                                        <p className="margin-no">{prod.title}</p>
                                        <h3 className="font-bold font-xl margin-tb-xs">${prod.price}</h3>
                                    </div>
                                </div>
                    
                            </div>
                            <div className="card-lower ">
                                <div className="card-footer-wishlist width-full">
                                {
                                    cart.some(p=>p.id === prod.id) ? 
                                    (<button onClick={() => {
                                        dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: prod
                                        })
                                    }} className="btn-small width-full margin-no">REMOVE FROM CART</button>) :
                                    (<button onClick={() => {
                                        dispatch({
                                            type: "ADD_TO_CART",
                                            payload: prod
                                        })
                                    }} className="btn-small width-full margin-no">ADD TO CART</button>

                                    )
                                }
                                    {
                                        wishlist.some(p=>p.id === prod.id) ?
                                        (<button className="btn-text width-full margin-no button-hovergrey">ADDED TO WISHLIST</button>) :
                                        (<button onClick={() => {
                                        dispatch({
                                            type: "MOVE_TO_WISHLIST",
                                            payload: prod
                                        })
                                    }} className="btn-text width-full margin-no">MOVE TO WISHLIST</button>)
                                    } 
                                    
                                </div>
                            </div>
                            
                        </div>
  );
}

export default ProductCard;