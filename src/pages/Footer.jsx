import { FaTruckFast } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiDiamondHard } from "react-icons/gi";
import {FaHouse,FaHeart,FaCartShopping,FaClockRotateLeft} from "react-icons/fa6";
import { MdSupportAgent,MdShoppingBag } from "react-icons/md";
import {FaQuestionCircle,FaFileContract} from "react-icons/fa";
import { RiShieldCheckFill } from "react-icons/ri";
import {FaGithub,FaLinkedin,FaEnvelope,FaPhoneAlt,FaArrowUp} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../CSS/Footer.css";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div id="About"><br />
            <section className="why-section" >
                <h2 className="why-title">Why Choose ShopSphere</h2>
                <div className="why-grid">
                    <div className="why-card">
                        <FaTruckFast className="why-icon"/>
                        <h3>Fast Delivery</h3>
                        <p>Quick and secure delivery across India.</p>
                    </div>
                    <div className="why-card">
                        <RiSecurePaymentLine className="why-icon"/>
                        <h3>Secure Payment</h3>
                        <p>Your transactions are protected.</p>
                    </div>
                    <div className="why-card">
                        <GiDiamondHard className="why-icon"/>
                        <h3>Premium Quality</h3>
                        <p>Only high-quality and trusted products.</p>
                    </div>
                    <div className="why-card">
                        <MdSupportAgent className="why-icon"/>
                        <h3>24/7 Support</h3>
                        <p>We're always here whenever you need us.</p>
                    </div>
                </div>
            </section>
            
            <section className="footer-section">
                <h2 className="footer-title">🧭 Quick Navigation</h2>
                <p className="footer-subtitle">Navigate through ShopSphere with ease.</p>
                
                <div className="footer-grid">
                    <div className="footer-card" onClick={() => {navigate("/home",{state: {scrollTo: "home",},});}}>
                    <div className="footer-icon"><FaHouse /></div>
                    <h3>Home</h3>
                    <p>Welcome Back<br />Start your shopping journey.</p>
                </div>
                <div className="footer-card" onClick={() => navigate("/Products")}>
                    <div className="footer-icon"> <MdShoppingBag /></div>
                    <h3>Products</h3>
                    <p>Explore<br />Browse our latest collection.</p>
                </div>
                <div className="footer-card" onClick={() => navigate("/wishlist")}>
                    <div className="footer-icon"> <FaHeart /></div>
                    <h3>Wishlist</h3>
                    <p>Favorites<br />Products you love the most.</p>
                </div>
                <div className="footer-card" onClick={() => {navigate("/home", {state: {scrollTo: "recent-products",},});}}>
                    <div className="footer-icon">👁</div>
                    <h3>Recent</h3>
                    <p>Continue<br />Pick up where you left off.</p>
                </div>
                <div className="footer-card" onClick={() => navigate("/cart")}>
                    <div className="footer-icon"><FaCartShopping /></div>
                    <h3>Cart</h3>
                    <p>Ready<br />Review before checkout.</p>
                </div>
            </div>
        </section>

        <div  id="Help"><br />
        <section className="footer-section" >
            <h2 className="footer-title">
                🛡 Customer Support
            </h2>
            <p className="footer-subtitle">We're here to make your shopping experience smooth and secure.</p>
            
            <div className="footer-grid support-grid">
                <div className="footer-card" onClick={() => navigate("/customer-support")}>
                    <div className="footer-icon"><MdSupportAgent /></div>
                    <h3>Help Center</h3>
                    <p>Get assistance<br />whenever you need.</p>
                </div>
                <div className="footer-card" onClick={() => navigate("/customer-support", {
                    state: { section: "faq" }})}>
                    <div className="footer-icon"><FaQuestionCircle /></div>
                    <h3>FAQs</h3>
                    <p>Find answers<br />to common questions.</p>
                </div>
                <div className="footer-card" onClick={() => navigate("/customer-support", {
                    state: { section: "privacy" }})}>
                        <div className="footer-icon"><RiShieldCheckFill /></div>
                        <h3>Privacy</h3>
                        <p>Your personal<br />data stays protected.</p>
                </div>
                <div className="footer-card" onClick={() =>navigate("/customer-support", {
                    state: { section: "terms" }})}>
                        <div className="footer-icon"><FaFileContract /></div>
                        <h3>Terms</h3>
                        <p> Read our<br />terms & conditions.</p>
                </div>
            </div>
        </section>
        </div>

        <div id="connect"><br />
        <section className="footer-section">
            <h2 className="footer-title">🌐 Connect With Me</h2>
            <p className="footer-subtitle">Let's connect and build something amazing together.</p>
            <div className="footer-grid connect-grid">

                <a href="https://github.com/UthrakumarA" target="_blank" rel="noopener noreferrer" className="footer-card connect-card">
                <div className="footer-icon"><FaGithub /></div>
                <h3>GitHub</h3>
                <p>Explore my<br />latest projects.</p>
                </a>
                
                <a href="https://www.linkedin.com/in/a-uthrakumar"target="_blank"rel="noopener noreferrer"className="footer-card connect-card">
                <div className="footer-icon"><FaLinkedin /></div>
                <h3>LinkedIn</h3>
                <p>Connect with<br />me professionally.</p>
                </a>
                
                <a href="mailto:uthra1742003@gmail.com" className="footer-card connect-card">
                    <div className="footer-icon"><FaEnvelope /></div>
                    <h3>Email</h3>
                    <p>Send me<br />an email.</p>
                </a>
                
                <a href="tel:+91 8610117810" className="footer-card connect-card">
                    <div className="footer-icon"><FaPhoneAlt /></div>
                    <h3>Phone</h3>
                    <p>Let's have<br />a conversation.</p>
                </a>
            </div>
        </section>
        </div>
        
        <section className="footer-bottom">
            <div className="footer-card1">
                <h2 className="footer-logo">🛒 ShopSphere</h2>
                <p className="footer-tagline">Shop Smart. Shop with Confidence.</p>
            </div>
            <button className="back-to-top"onClick={() => window.scrollTo({top: 0,behavior: "smooth"})}>
                <FaArrowUp /><span>Back To Top</span>
            </button>
            
            <div className="footer-line"></div>
            <p className="copyright">© 2026 ShopSphere</p>
            <p className="developer">
                Built with <span style={{color:"#ff4d6d"}}>❤</span> by
                <strong> A. Uthra Kumar</strong>
            </p>
        </section>
        </div>
    );
}

export default Footer