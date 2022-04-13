import {createContext, useContext, useReducer} from "react"
import { products } from "../backend/db/products"
import { cartReducer } from "./cart-reducer"

const CartContext = createContext()

const CartContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
  })
  return <CartContext.Provider value={{state, dispatch}}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)

export default CartContextProvider