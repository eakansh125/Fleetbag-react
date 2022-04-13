
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
        return {...state, cart: [...state.cart, {...action.payload, qty:1}]}

    case "REMOVE_FROM_CART":
        return {...state, cart: state.cart.filter(c=>c.id !== action.payload.id)}

    // case "INC_PRODUCT":
    //     return {...state, cart: state.cart.includes(c=>c.id === action.payload.id) ? state.cart.qty++ : state.cart.qty}

    default:
      return state;
  }
};


export { cartReducer };