import Navbar from '../../Reusables/Navbar';
import Deals from './Deals';
import Featured from './Featured';
import './Home.css'

function Home() {
  return (
    <body>
    <Navbar />
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