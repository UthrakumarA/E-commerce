import { useNavigate } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";
import "../CSS/NotFound.css";

function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="notfound-container">
            <div className="notfound-card">
                <FaExclamationTriangle className="notfound-icon"/>
                <h1 className="notfound-code">404</h1>
                <h2 className="notfound-title">Oops! Page Not Found</h2>
                <p className="notfound-text">
                    The page you're looking for doesn't exist,
                    has been moved, or the URL is incorrect.
                </p>
                <button className="notfound-btn" onClick={() => navigate("/home")}>
                    <FaHome /><span>Back to Home</span>
                </button>
            </div>
        </div>
    );
}
export default NotFound;