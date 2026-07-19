import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {FaShoppingCart,FaEye,FaEyeSlash,FaLock, FaEnvelope} from "react-icons/fa";
import "../CSS/Auth.css";

function Login() {

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");

const [showPassword, setShowPassword] = useState(false);
const [loginError, setLoginError] = useState("");

const [loading, setLoading] = useState(false);
const [showSuccess, setShowSuccess] = useState(false);
const [successName, setSuccessName] = useState("");
const [shake, setShake] = useState(false);

const navigate = useNavigate();

const validateEmail = () => {
    if (email.trim() === "") {
        setEmailError("Email is required");
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setEmailError("Enter a valid email");
    }
    else {
        setEmailError("");
    }

};

const validatePassword = () => {
    if (password.trim() === "") {
        setPasswordError("Password is required");
    }
    else {
        setPasswordError("");
    }

};

const handleLogin = () => {

    validateEmail();
    validatePassword();

    if (email.trim() === "" ||password.trim() === "" ||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) 
    {
        return;
    }

    const users =JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find((user) =>
        user.email === email.trim().toLowerCase() &&user.password === password
    );

    if (!validUser) {
        setLoginError("Invalid email or password");
        setShake(true);
        setTimeout(() => {
            setShake(false);
        }, 450);
        setPassword("");
        return;
    }

   setLoading(true);
   localStorage.setItem("loggedInUser",JSON.stringify(validUser));
   setSuccessName(validUser.name);
   setLoginError("");
   
   setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
      setTimeout(() => {
        navigate("/home");
      },1800);;
    },1200);

};

return (

<div className="auth-container" >
    <div className="floating-circle circle1"></div>
    <div className="floating-circle circle2"></div>
    <div className="floating-circle circle3"></div>
    <div className="auth-wrapper">
        <div className="auth-left slide-left">
        
            <div className="brand-logo">🛒 ShopSphere</div>

            <h1>Welcome Back!</h1>

            <p className="left-description">
                Login to continue your shopping journey with premium products,
                secure payments and fast delivery.
            </p>

            <div className="feature-list">
                <div>✔ Premium Products</div>
                <div>✔ Fast Delivery</div>
                <div>✔ Secure Payments</div>
                <div>✔ 24/7 Support</div>
            </div>
        </div>
        
        <div className="auth-right slide-right">
        <div className="auth-card">
            <div className="mobile-brand"><FaShoppingCart className="mobile-brand-icon" /><h4>ShopSphere</h4></div>
            <h1 className="auth-title"><FaShoppingCart className="title-icon" />Welcome Back</h1>
            <p className="auth-subtitle">Sign in to continue shopping</p>
            
            {emailError && (<p className="error-text">{emailError}</p>)}
            <div className={`input-box ${shake ? "shake-input" : ""}`}>
                <FaEnvelope className="input-icon" />
                <input type="email" placeholder="Email" value={email}onChange={(e) => {setEmail(e.target.value);
                if (emailError) setEmailError("");
                if (loginError) setLoginError("");}} onBlur={validateEmail}/>
            </div>

            {passwordError && (<p className="error-text">{passwordError}</p>)}<br />
                <div className={`input-box ${shake ? "shake-input" : ""}`}>
                    <FaLock className="input-icon" />
                    <input type={showPassword ? "text" : "password"} placeholder="Password" value={password}
                    onChange={(e) => {setPassword(e.target.value);
                        if (passwordError) setPasswordError("");
                        if (loginError) setLoginError("");}} onBlur={validatePassword}/>
                        <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                </div> 
            <br />
            
            <button className="auth-btn" onClick={handleLogin} disabled={loading}>
                {loading ? (<> <span className="spinner"></span>Please wait...</>) : ("Login")}
            </button>
            {loginError && (<p className="error-text" style={{ textAlign: "center" }}> {loginError} </p>)}
            
            <div className="auth-link">
                Don't have an account?<br /><br />
                <b><p style={{color: "#02f737",cursor:"pointer"}} onClick={() => navigate("/register")}><u>Create Account</u> ➡</p></b>
            </div>
        </div>
        </div>
    </div>
    {showSuccess && (
        <div className="success-overlay">
            <div className="success-popup">
                <div className="success-icon">✅</div>
                <h2>Login Successful</h2>
                <p>Welcome Back,<br />
                <b>{successName}</b></p>
                <span>Redirecting...</span>
            </div>
        </div>
    )}
</div>
            
);
}

export default Login;