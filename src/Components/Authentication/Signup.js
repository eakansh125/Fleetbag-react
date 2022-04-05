import { Link } from "react-router-dom";
import './Login.css'

function Signup() {
  return (
    <body>
        <main className="main-view">
        <div className="main-view-container">
            <div className="component-container">
                <div className="login-container">
                    <form className="flex-column align-center">
                        <h2>Sign up</h2>
                        <label className="flex-row width-almost-full" htmlFor="email">Email address</label>
                        <input className="input-outlined margin-tb" type="text" placeholder="eakansh.srivas125@gmail.com" />
                        <label className="flex-row width-almost-full" htmlFor="password">Password</label>
                        <input className="input-outlined margin-tb" type="password" placeholder="**********" />
                        <div className="login-container-remember flex-row align-center justify-bw width-almost-full margin-tb">
                            <div>
                                <input type="checkbox" value="tnc" />
                                <label htmlFor="tnc">I accept all terms and conditions</label>
                            </div>
                            
                        </div>
                        <button className="btn-small width-almost-full">Create new account</button>
                        <Link className="btn-text margin-tb" to='/login'>Already have an account</Link>
                    </form>
                </div>
            </div>
        </div>
    </main>
    
    </body>
  );
}

export default Signup;