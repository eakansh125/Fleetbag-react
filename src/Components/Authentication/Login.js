import Navbar from "../../Reusables/Navbar";
import { Link } from "react-router-dom";
import './Login.css'

function Login() {
  return (
    <body>
        <Navbar />

        <main class="main-view">
            <div class="main-view-container">

            <div class="component-container">
                <div class="login-container">
                    <form class="flex-column align-center">
                        <h2>Login</h2>
                        <label class="flex-row width-almost-full" for="email">Email address</label>
                        <input class="input-outlined margin-tb" type="text" placeholder="eakansh.srivas125@gmail.com" />
                        <label class="flex-row width-almost-full" for="password">Password</label>
                        <input class="input-outlined margin-tb" type="password" placeholder="**********" />
                        <div class="login-container-remember flex-row align-center justify-bw width-almost-full margin-tb">
                            <div>
                                <input type="checkbox" value="remember" />
                                <label for="remember">Remember me</label>
                            </div>
                            <a class="text-dec-none font-primary-color" href="#top">Forgot your password</a>
                        </div>
                        <button class="btn-small width-almost-full">Login</button>
                        <Link className="btn-text margin-tb" to='/signup'>Create new account</Link>

                    </form>  
                </div>
            </div>
        </div>
    </main>
    </body>
  );
}

export default Login;