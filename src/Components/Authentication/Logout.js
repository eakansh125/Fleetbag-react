import './Login.css'

function Logout() {
  return (
    <body>
        <main className="main-view">
        <div className="main-view-container">

            <div className="component-container">
                <div className="login-container margin-tb">
                    <form className="flex-column align-center">
                        <h4>Thanks for shopping. You have been successfully logged out!</h4>
                        <a href="login.html" className="btn-small margin-lr">Login again</a>
                    </form>
                </div>
            </div>
        </div>
    </main>
    
    </body>
  );
}

export default Logout;