import { useCart } from "../../Context/cart-context"


function CartProduct({product, discount}) {
    const { dispatch} = useCart();
    return (
         <div className="cart-item flex-row margin-tb">
                            <div className="cart-item-image-container">
                                <img className="cart-item-image" src="/img/pexels-ron-lach-10397680.jpg" alt="shirt" />
                            </div>
                            <div className="cart-item-desc-container">
                                <div className="cart-item-desc">
                                    <h3>{product.title}</h3>
                                    <h3>${product.price}</h3>
                                    <p>{discount}% off</p>
                                    <div className="flex-row align-center">
                                        <p>Quantity</p>
                                        <div className="flex-row align-center">
                                            <button className="btn-outlined margin-lr">-</button>
                                            <p>1</p>
                                            <button 
                                            // onClick={() => {
                                            //     dispatch({
                                            //         type: "INC_PRODUCT",
                                            //         payload: product
                                            //     })
                                            // }} 
                                            className="btn-outlined margin-lr">+</button>
                                        </div>
                                    </div>
                                    <button onClick={() => {
                                        dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: product
                                        })
                                    }} className="btn-small width-full">REMOVE FROM CART</button>
                                    <button className="btn-small btn-outlined width-full margin-tb">MOVE TO WISHLIST</button>
                                </div>
                            </div>
                        </div>
    )
}

export default CartProduct