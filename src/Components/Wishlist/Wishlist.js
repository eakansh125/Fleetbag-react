

import { useCartWishlist } from '../../Context/cart-context';
import './Wishlist.css'
import WishlistProduct from './WishlistProduct'

function Wishlist() {
    const {state: {wishlist}} = useCartWishlist();
    console.log(wishlist)
    return (
        <main className="main-view">
        <div className="main-view-container">

            <div className="component-container">
                    {wishlist.length>0 ? 
                    (<div class="wishlist-container flex-row align-center justify-ev">
                    {
                        wishlist.map(product => <WishlistProduct product={product}/>)
                        
                    }
                    </div>) :
                    (<h2 className='page-empty'>Your Wishlist is empty</h2>)}            
            </div>
        </div>
    </main>
    )
}

export default Wishlist