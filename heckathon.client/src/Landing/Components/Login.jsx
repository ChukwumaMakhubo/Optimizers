import '../ComponentsStyle/Login.css';
function Login() {
    return (
        <div className="login-container">
            <div className="login">
                <h1>Welcome Back!</h1>

                <div className="login-control">
                    <i className="fa-regular fa-envelope"></i>
                    <input type="text" placeholder="Username" />
                </div>

                <div className="login-control">
                    <i className="fa-solid fa-lock"></i>
                    <input type="password" placeholder="Password" />
                </div>
                <p className="forgot-password">Forgot password?</p>

                <div className="login-button-container">
                  <button>Login</button>
                </div>
                <p className="set-up-account-spans">
                    <span>Dont have an account?</span>                    
                    <span className="create-account">Create account</span>                    
                </p>
                
            </div>
        </div>
    );
}

export default Login; 
