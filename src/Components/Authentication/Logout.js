import Navbar from "../../Reusables/Navbar";
import './Login.css'

function Logout() {
  return (
    <body>
        <Navbar />

        <main class="main-view">
        <div class="main-view-container">

            <div class="component-container">
                <div class="login-container margin-tb">
                    <form class="flex-column align-center">
                        <h4>Thanks for shopping. You have been successfully logged out!</h4>
                        <a href="login.html" class="btn-small margin-lr">Login again</a>
                    </form>
                </div>
            </div>
        </div>
    </main>
    
    </body>
  );
}

export default Logout;