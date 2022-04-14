import { useCartWishlist } from "../../Context/cart-context"

function WishlistProduct({product}) {
    const {dispatch} = useCartWishlist();
    return(
        <div class="card card-small gray-shadow margin-tb margin-lr">
                        <div class="card-upper">
                            <div class="image-vertical-small">
                                <img src="/img/pexels-ron-lach-10397680.jpg" alt="stadium" />
                            </div>
                            <div class="text align-center justify-bw">
                                <div class="text-heading flex-column align-center">
                                    <p class="margin-no">{product.title}</p>
                                    <h3 class="font-bold font-xl margin-tb-xs">$200</h3>
                                </div>
                            </div>

                        </div>
                        <div class="card-lower ">
                            <div class="card-footer-wishlist width-full">
                                <button onClick={() => {
                                        dispatch({
                                            type: "WISHLIST_TO_CART",
                                            payload: product
                                        })
                                    }} class="btn-small width-full margin-no">MOVE TO CART</button>
                                <button onClick={() => {
                                        dispatch({
                                            type: "REMOVE_FROM_WISHLIST",
                                            payload: product
                                        })
                                    }} class="btn-text width-full margin-no">REMOVE FROM WISHLIST</button>
                            </div>
                        </div>
                        
                    </div>
    )
}

export default WishlistProduct