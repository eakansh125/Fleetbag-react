import { useState, useEffect } from 'react';
import { useCart } from '../../Context/cart-context'
import './Cart.css'
import CartPrice from './CartPrice'
import CartProduct from './CartProduct'

function Cart() {

    const {state: {cart}} = useCart();

    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc,val) => acc+ Number(val.price) , 0))
    }, [cart])
    

    return (
        <main className="main-view">
        <div className="main-view-container">

            <div className="component-container">
                 
                {cart.length > 0 ? ( 
                     <>
                <div className="cart-container flex-row">
                    <div className="cart-item-container">
                    {
                        cart.map(product => <CartProduct product={product} discount={"50"}/>)
                    }
                    </div>
                    <CartPrice total={total}/>
                </div>
                 </> 
                ) : (
                    <h2 className='cart-empty'>Your cart is empty</h2>
                ) 
                }
                
            </div>
        </div>
    </main>
    )
}

export default Cart