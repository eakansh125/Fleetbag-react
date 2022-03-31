
function Navbar() {
    return (
        <header class="nav-header">
        <div class="nav-header-div">
            <div class="nav-header-div-lt">
                <a class="text-dec-none font-bold margin-lr font-primary-color" href="#top">HOME</a>
                <a class="text-dec-none font-bold margin-lr font-primary-color" href="#top">FILTER</a>
                <a class="text-dec-none font-bold margin-lr font-primary-color" href="#top">PRODUCTS</a>
            </div>
            <div class="nav-header-div-mid">
                <input class="input-outlined" type="text" placeholder="Search" />
            </div>
            <div class="nav-header-div-rt">   
                        <a href="#top" class="btn-small margin-lr">Login</a>

                        <div class="badge-container margin-lr">
                            <a href="#top"><img
                                src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/30/000000/external-like-instagram-flatart-icons-outline-flatarticons.png" alt="icons"/>
                            <span class="badge-span">6</span></a>
                        </div>

                        <div class="badge-container margin-lr">
                            <a href="#top"><img src="https://img.icons8.com/ios/30/000000/add-shopping-cart--v1.png" alt="icons"/>
                                <span class="badge-span">8</span></a>
                        </div> 
            </div>
        </div>
    </header> 
    )
}

export default Navbar