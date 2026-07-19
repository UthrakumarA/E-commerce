import {useNavigate, useLocation} from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useCart } from "../context/CardContext";
import { useTheme } from "../context/ThemeContext";
import { useWishlist } from "../context/WishlistContext";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../assets/brandlogo.png";
import "../CSS/Navbar.css";

const Navbar=()=> {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const menuRef = useRef(null);
  const {cartCount}=useCart();
  const { wishlistCount } = useWishlist();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const loggedInUser = JSON.parse(
  localStorage.getItem("loggedInUser")
);
   
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) 
        {
          setShowProfileMenu(false);
          setShowThemeMenu(false);
        }

    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowProfileMenu(false);
        setShowThemeMenu(false);
      }
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
}, []);

  const handleRecentClick = () => {
    if (location.pathname === "/home") {
      const element = document.getElementById("recent-products");
      
      if (element) {
        const navbarHeight = 70;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: "smooth",
        });
      }
    } 
    else {
      navigate("/home", {
        state: {
          scrollTo: "recent-products",
        },
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setShowProfileMenu(false);
    navigate("/", { replace: true });
  };

  const displayName = loggedInUser ? ( loggedInUser.name.length > 10
        ? loggedInUser.name.substring(0, 10) + "..."
        : loggedInUser.name
    ) : "";

  return(
  <nav className="navbar">
    <img className="brandlogo" src={Logo} alt="ShopSphere logo symbol" />
      <div className="logo">
        ShopSphere
      </div>

      <div className="navbar-bottom">
        <span className="nav-link"onClick={() => {
          if (location.pathname === "/home") {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          } 
          else {
            navigate("/home");
          }
          }}>Home
        </span>
        <span className="nav-link" onClick={() => navigate("/Products")}>Products</span>
        <span className="nav-link" onClick={() => navigate("/cart")}>Cart ({cartCount})</span>
        <span className="nav-link" onClick={handleRecentClick}>Recent</span>
        <span className="nav-link" onClick={() => {navigate("/orders");}}>Orders</span>
      </div>

      <div className="profile-section" ref={menuRef}>
        {loggedInUser && (
          <div className="avatar-btn" onClick={() => setShowProfileMenu(!showProfileMenu)}>
            <FaUserCircle />
          </div>
        )}
      
      {showProfileMenu && (
        <div className="profile-dropdown">
          <div className="profile-header">
            <FaUserCircle className="profile-icon"/>
            <h3>Hi {loggedInUser?.name}</h3>
            <p>Welcome Back</p>
          </div>
        <div className="header-divider"></div>
        <div className="dropdown-item" onClick={()=>{navigate("/profile");
            setShowProfileMenu(false);
            }}>👤 My Profile
        </div>
        <div className="item-divider"></div>
        <div className="dropdown-item" onClick={()=>{navigate("/wishlist");
            setShowProfileMenu(false);
            }}>❤️ Wishlist ({wishlistCount})
        </div>
        <div className="item-divider"></div>
        <div className="dropdown-item">
          💳 Payments
        </div>
        <div className="item-divider"></div>
        <div className="dropdown-item" onClick={()=>setShowThemeMenu(!showThemeMenu)}>
          {theme==="dark"?"🌙":"🌞"} Theme
          <span className="submenu-arrow">
            {showThemeMenu?"▼":"▶"}
          </span>
        </div>
        
        {showThemeMenu && (
          <div className="theme-submenu">
            <div className={`dropdown-item ${theme==="light"?"active-theme":""}`}
                onClick={()=>toggleTheme("light")}>
                🌞 Light
            </div>
            
            <div className={`dropdown-item ${theme==="dark"?"active-theme":""}`}
                onClick={()=>toggleTheme("dark")}>
                🌙 Dark
            </div>
          </div>
        )}
        <div className="item-divider"></div>
        <div className="dropdown-item" onClick={() => {navigate("/home", {state: { scrollTo: "About" }});setShowProfileMenu(false);}}>
          ℹ️ About
        </div>
        <div className="item-divider"></div>
        <div className="dropdown-item" onClick={() => {navigate("/home", {state: { scrollTo: "connect" }});setShowProfileMenu(false);}}>
          📞 Contact
        </div>
        <div className="item-divider"></div>
        <div className="dropdown-item" onClick={() => {navigate("/home", {state: { scrollTo: "Help" }});setShowProfileMenu(false);}}>
          ❓ Help
        </div>
        <div className="item-divider"></div>
        <div className="dropdown-item logout"onClick={handleLogout}>
          🚪 Logout
        </div>
        </div>
      )}
      </div>
  </nav>
);
}

export default Navbar;