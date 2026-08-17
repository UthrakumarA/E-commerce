import {MdShoppingBag,MdSupportAgent,MdPrivacyTip} from "react-icons/md";
import {FaSearch,FaUser,FaShoppingCart,FaFileContract} from "react-icons/fa";
import { RiShieldCheckFill } from "react-icons/ri";
import FAQAccordion from "../help-support/FAQAccordion";
import PolicySection from "../help-support/PolicySection";
import supportSearchData from "../data/SearchData";
import SearchResults from "../help-support/SearchResults";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../CSS/CustomerSupport.css";

function CustomerSupport() {
    
    const [search, setSearch] = useState("");
    const location = useLocation();

    useEffect(() => {
        const section = location.state?.section;
        if (!section) return;
        setTimeout(() => {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 100);
    }, [location]);

    const filteredResults = supportSearchData.filter((item) =>item.title.toLowerCase().includes(search.toLowerCase()) 
        ||item.description.toLowerCase().includes(search.toLowerCase())
    );

    return ( 
        <div className="support-container">
            <section className="support-hero">
                <h1>🛡 Customer Support</h1>
                <p>
                    Welcome to the ShopSphere Help Center.
                    We're here to make your shopping experience smooth,
                    secure, and enjoyable.
                </p>

                <div className="support-search">
                    <FaSearch className="search-icon"/>
                    <input type="text" placeholder="Search FAQs, Privacy, Terms..."value={search} onChange={(e)=>setSearch(e.target.value)}/>
                </div>
            </section>

            {search.trim() !== "" && (
                <SearchResults results={filteredResults}onSelect={(section)=>{
                    document.getElementById(section)?.scrollIntoView({behavior:"smooth"});setSearch("");}}/>)
            }

            <section id="help" className="support-section">
                <h2>Help Categories</h2>
                <div className="support-grid">
                    <div className="support-card">
                        <MdShoppingBag className="support-icon"/>
                        <h3>Orders</h3>
                        <p>Track and manage your orders.</p>
                    </div>

                    <div className="support-card">
                        <FaUser className="support-icon"/>
                        <h3>Account</h3>
                        <p>Edit profile and login settings.</p>
                    </div>

                    <div className="support-card">
                        <FaShoppingCart className="support-icon"/>
                        <h3>Cart</h3>
                        <p>Review your shopping cart.</p>
                    </div>

                    <div className="support-card">
                        <MdPrivacyTip className="support-icon"/>
                        <h3>Privacy</h3>
                        <p>Your data stays safe with us.</p>
                    </div>

                    <div className="support-card">
                        <FaFileContract className="support-icon"/>
                        <h3>Terms</h3>
                        <p>Read our terms & conditions.</p>
                    </div>
                </div>
            </section> 

            <section id="faq"><br /><br /><br /><br />
                <FAQAccordion />
            </section>

            <section  id="privacy"><br /><br /><br /><br />
            <PolicySection icon={<RiShieldCheckFill />}
            title="Privacy Policy"
            items={[
                "Your personal information is kept confidential.",
                
                "We never sell your personal data to third parties.",
                
                "Passwords are securely managed.",
                
                "Cookies may be used to improve your browsing experience.",
                
                "Your data is used only to improve our services."
            ]}/>
            </section>

            <section id="terms" ><br /><br /><br /><br />
            <PolicySection icon={<FaFileContract />}
            title="Terms & Conditions"
            items={[
                "Use ShopSphere responsibly and respectfully.",
                
                "Product availability may change without notice.",

                "Prices are subject to updates whenever necessary.",
                
                "Users are responsible for maintaining account security.",
                
                "Using ShopSphere means you agree to these terms."
            ]}/>
            </section>
        </div>
    );
}

export default CustomerSupport;