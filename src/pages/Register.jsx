import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {FaShoppingCart,FaUser,FaLock,FaEnvelope} from "react-icons/fa";
import "../CSS/Auth.css";

const Register= () => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const [nameError, setNameError] = useState("");
const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");
const [confirmPasswordError, setConfirmPasswordError] = useState("");

const [loading, setLoading] = useState(false);
const [showSuccess, setShowSuccess] = useState(false);

const navigate = useNavigate();

const validateName = () => {

    if (name.trim() === "") {
        setNameError("Full Name is required");
        return false;
    }
    else if (!/[A-Za-z]/.test(name)) {
        setNameError("Name must contain at least one letter");
        return false;
    }
    else if (!/^[A-Za-z\s'-]+$/.test(name)) {
        setNameError("Name contains invalid characters");
        return false;
    }

    setNameError("");
    return true;
};

const validateEmail = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
        setEmailError("Email is required");
        return false;
    }
    if (!emailRegex.test(email.trim())) {
        setEmailError("Please enter a valid email address");
        return false;
    }
    setEmailError("");
    return true;
};

const validatePassword = () => {

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password.trim() === "") {
        setPasswordError("Password is required");
        return false;
    }
    if (!passwordRegex.test(password)) {
        setPasswordError(
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
        );
        return false;
    }
    setPasswordError("");
    return true;
};

const validateConfirmPassword = () => {

    if (confirmPassword.trim() === "") {
        setConfirmPasswordError("Please confirm your password");
        return false;
    }
    if (password !== confirmPassword) {
        setConfirmPasswordError("Passwords do not match");
        return false;
    }
    setConfirmPasswordError("");
    return true;
};

const handleRegister = () => {

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (!isNameValid ||!isEmailValid ||!isPasswordValid ||!isConfirmPasswordValid)
        {
            return;
        }
        
    const newUser = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password: password
    };

    const existingUsers =
        JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = existingUsers.some(
        (user) => user.email === newUser.email
    );

    if (emailExists) 
        {
           setEmailError("An account with this email already exists.");
           return;
        }
    existingUsers.push(newUser);
    
    localStorage.setItem("users",JSON.stringify(existingUsers));
    
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        setShowSuccess(true);
        setTimeout(() => {
            navigate("/");
        },1800);;
    },1200);
    
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    
};

return (

<div className="auth-container">
    <div className="floating-circle circle1"></div>
    <div className="floating-circle circle2"></div>
    <div className="floating-circle circle3"></div>
    <div className="auth-wrapper">
        <div className="auth-left slide-left">
    
            <div className="brand-logo">🛒 ShopSphere</div>
            
            <h1>Join ShopSphere</h1>

            <p className="left-description">
                Create your account today and enjoy a smarter shopping experience.
            </p>
            
            <div className="feature-list">
                <div>✔ Wishlist</div>
                <div>✔ Faster Checkout</div>
                <div>✔ Order Tracking</div>
                <div>✔ Exclusive Deals</div>
            </div>
            <p style={{color:"#FFFFFF"}}>10,000+ Happy Customers⭐⭐⭐⭐⭐<br/><br />
            Trusted by thousands</p>
       
        </div>
        
        <div className="auth-right slide-right">
        <div className="auth-card">
            <div className="mobile-brand"><FaShoppingCart className="mobile-brand-icon" /><h4>ShopSphere</h4></div>
            <h1 className="auth-title"><FaShoppingCart className="title-icon" />Create Account</h1>
            <p className="auth-subtitle">Join ShopSphere today</p>

            {nameError && (<p className="error-text">{nameError}</p>)}
            <div className="input-box">
                <FaUser className="input-icon" />
                <input type="text" placeholder="Full Name" value={name}onChange={(e)=>setName(e.target.value)}/>
            </div>

            {emailError && (<p className="error-text">{emailError}</p>)}
            <div className="input-box">
                <FaEnvelope className="input-icon" />
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            
            {passwordError && (<p className="error-text">{passwordError}</p>)}
            <div className="input-box">
                <FaLock className="input-icon" />
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            
            {confirmPasswordError && (<p className="error-text">{confirmPasswordError}</p>)}
            <div className="input-box">
                <FaLock className="input-icon" />
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
            </div>

            <button className="auth-btn" onClick={handleRegister} disabled={loading}>
                {loading ? (<><span className="spinner"></span>Creating Account...</>) : ("Register")}
            </button>
            
            <div className="auth-link">
                Already have an account?<br /><br />
                <b><p style={{color:"#02f737",cursor:"pointer"}} onClick={() => navigate("/")}>⬅ <u>Back To Login</u></p></b>
            </div>
        </div>
        </div>
    </div>
    {showSuccess && (
        <div className="success-overlay">
            <div className="success-popup">
                <div className="success-icon">🎉</div>
                <h2>Registration Successful</h2>
                <p>Your account has been created.</p>
                <span>Redirecting to Login...</span>
            </div>
        </div>
    )}
</div>
);
}

export default Register;