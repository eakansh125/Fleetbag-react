import { Link } from "react-router-dom";
import Navbar from "../../Reusables/Navbar";
import './Login.css'

function Signup() {
  return (
    <body>
        <Navbar />

        <main class="main-view">
        <div class="main-view-container">
            <div class="component-container">
                <div class="login-container">
                    <form class="flex-column align-center">
                        <h2>Sign up</h2>
                        <label class="flex-row width-almost-full" for="email">Email address</label>
                        <input class="input-outlined margin-tb" type="text" placeholder="eakansh.srivas125@gmail.com" />
                        <label class="flex-row width-almost-full" for="password">Password</label>
                        <input class="input-outlined margin-tb" type="password" placeholder="**********" />
                        <div class="login-container-remember flex-row align-center justify-bw width-almost-full margin-tb">
                            <div>
                                <input type="checkbox" value="tnc" />
                                <label for="tnc">I accept all terms and conditions</label>
                            </div>
                            
                        </div>
                        <button class="btn-small width-almost-full">Create new account</button>
                        <Link class="btn-text margin-tb" to='/login'>Already have an account</Link>
                    </form>
                </div>
            </div>
        </div>
    </main>
    
    </body>
  );
}

export default Signup;