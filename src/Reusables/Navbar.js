import { Link } from "react-router-dom";
import { useCart } from "../Context/cart-context";

function Navbar() {
    const {state:{cart}} = useCart();
    return (

        <header className="nav-header">
        <div className="nav-header-div">
            <div className="nav-header-div-lt">
                <Link className="text-dec-none font-bold margin-lr font-primary-color" to='/'>HOME</Link>
                <Link className="text-dec-none font-bold margin-lr font-primary-color" to='/'>FILTER</Link>
                <Link className="text-dec-none font-bold margin-lr font-primary-color" to="/product">PRODUCTS</Link>
            </div>
            <div className="nav-header-div-mid">
                <input className="input-outlined" type="text" placeholder="Search" />
            </div>
            <div className="nav-header-div-rt">   
                        <Link to="/login" class="btn-small margin-lr">Login</Link>


                        <div className="badge-container margin-lr">
                            <a href="#top"><img
                                src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/30/000000/external-like-instagram-flatart-icons-outline-flatarticons.png" alt="icons"/>
                            <span className="badge-span">6</span></a>
                        </div>

                        <div className="badge-container margin-lr">
                            <Link to="/cart"><img src="https://img.icons8.com/ios/30/000000/add-shopping-cart--v1.png" alt="icons"/>
                                <span className="badge-span">{cart.length}</span></Link>
                        </div> 
            </div>
        </div>
    </header> 
    )
}

export default Navbar