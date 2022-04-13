

function CartPrice({total}) {
    return (
         <div className="cart-pricing-container margin-tb">
                        <div className="cart-pricing">
                            <form onSubmit={(e) => e.preventDefault()} className="flex-column align-center">
                                <h2>Price details</h2>
                                <div className="flex-row align-center justify-bw width-almost-full border-top">
                                    <p>Price</p>
                                    <p>${total}</p>
                                </div>
                                <div className="flex-row align-center justify-bw width-almost-full">
                                    <p>Discount</p>
                                    <p>-$50</p>
                                </div>
                                <div className="flex-row align-center justify-bw width-almost-full">
                                    <p>Delivery Charges</p>
                                    <p>$5</p>
                                </div>
                                <div className="flex-row align-center justify-bw width-almost-full border-top">
                                    <h3>TOTAL AMOUNT</h3>
                                    <h3>${total-50+5}</h3>
                                </div>
                                <p>You will save 150$ on this order</p>
                                <button className="btn-small width-almost-full margin-tb">PLACE ORDER</button>
                            </form>
                        </div>
                    </div>
    )
}

export default CartPrice