import {createContext, useContext, useReducer} from "react"
import { products } from "../backend/db/products"
import { cartReducer } from "./cart-reducer"

const CartWishlistContext = createContext()

const CartWishlistContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
    wishlist: []
  })
  return <CartWishlistContext.Provider value={{state, dispatch}}>{children}</CartWishlistContext.Provider>
}

export const useCartWishlist = () => useContext(CartWishlistContext)

export default CartWishlistContextProvider