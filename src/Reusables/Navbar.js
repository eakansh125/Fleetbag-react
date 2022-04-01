
function Navbar() {
    return (
        <header className="nav-header">
        <div className="nav-header-div">
            <div className="nav-header-div-lt">
                <a className="text-dec-none font-bold margin-lr font-primary-color" href="#top">HOME</a>
                <a className="text-dec-none font-bold margin-lr font-primary-color" href="#top">FILTER</a>
                <a className="text-dec-none font-bold margin-lr font-primary-color" href="#top">PRODUCTS</a>
            </div>
            <div className="nav-header-div-mid">
                <input className="input-outlined" type="text" placeholder="Search" />
            </div>
            <div className="nav-header-div-rt">   
                        <a href="#top" className="btn-small margin-lr">Login</a>

                        <div className="badge-container margin-lr">
                            <a href="#top"><img
                                src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/30/000000/external-like-instagram-flatart-icons-outline-flatarticons.png" alt="icons"/>
                            <span className="badge-span">6</span></a>
                        </div>

                        <div className="badge-container margin-lr">
                            <a href="#top"><img src="https://img.icons8.com/ios/30/000000/add-shopping-cart--v1.png" alt="icons"/>
                                <span className="badge-span">8</span></a>
                        </div> 
            </div>
        </div>
    </header> 
    )
}

export default Navbar