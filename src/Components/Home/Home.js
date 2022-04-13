import Deals from './Deals';
import Featured from './Featured';
import './Home.css'
import { Link } from "react-router-dom";

function Home() {
  return (
    <body>
    
    <main className="main-view">
        <div className="main-view-container">
            
            <div className="component-container">
                
                <img className="img-full" src="/img/pexels-max-fischer-5872296.jpg" alt="banner" />
            </div>

            <div className="component-container">
                <h1 className="medium-margin-top-bottom">FEATURED PRODUCTS</h1>
                <Link className='card-container text-dec-none' to="/product"><Featured /></Link>  
                <h1 className="medium-margin-top-bottom">DEALS ON TOP BRANDS</h1>
                <Link className='card-container text-dec-none' to="/product"><Deals /></Link>
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
    <script src="https://kit.fontawesome.com/edf8601953.js" crossorigin="anonymous"></script>
</body>
  );
}

export default Home;