import Deals from './Deals';
import Featured from './Featured';
import './Home.css'

function Home() {
  return (
    <body>
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

    <main class="main-view">
        <div class="main-view-container">
            
            <div class="component-container">
                
                <img class="img-full" src="/img/pexels-max-fischer-5872296.jpg" alt="banner" />
            </div>

            <div className="component-container">
                <h1 className="medium-margin-top-bottom">FEATURED PRODUCTS</h1>
                <Featured />  
                <h1 className="medium-margin-top-bottom">DEALS ON TOP BRANDS</h1>
                <Deals />
                <h1 className="medium-margin-top-bottom">TOP BRANDS</h1>
                <div className='logo-container'>
                <img className='image-logos' src='https://images.yourstory.com/cs/wordpress/2017/05/Wrogn-01.jpg' alt='wrogn-logo'/>
                    <img className='image-logos' src='https://inkbotdesign.com/wp-content/uploads/2015/07/Ray-Ban-Logo-Design-1-1024x684.jpg' alt='rayban-logo'/>
                    <img className='image-logos' src='https://inkbotdesign.com/wp-content/uploads/2012/09/Nike-Logo-Design.png' alt='nike-logo'/>
                    <img className='image-logos' src='https://www.pngall.com/wp-content/uploads/2016/06/Adidas-Logo-PNG.png' alt='adidas-logo'/>
                </div>
                
            </div>        
         </div>
    </main>
    <footer>
        <h4>Made with love<span class="font-primary-color"><i class="fa-solid fa-heart"></i></span> by Eakansh</h4>
    </footer>

    <script src="https://kit.fontawesome.com/edf8601953.js" crossorigin="anonymous"></script>
</body>
  );
}

export default Home;