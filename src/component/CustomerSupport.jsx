import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function CustomerSupport() {

    const location = useLocation();

    const helpRef = useRef(null);
    const faqRef = useRef(null);
    const privacyRef = useRef(null);
    const termsRef = useRef(null);

    useEffect(() => {

        const section = location.state?.section;

        if (section === "help") {
            helpRef.current?.scrollIntoView({ behavior: "smooth" });
        }

        if (section === "faq") {
            faqRef.current?.scrollIntoView({ behavior: "smooth" });
        }

        if (section === "privacy") {
            privacyRef.current?.scrollIntoView({ behavior: "smooth" });
        }

        if (section === "terms") {
            termsRef.current?.scrollIntoView({ behavior: "smooth" });
        }

    }, [location]);

    return (

        <div style={{background: "white",color: "black",minHeight: "100vh",padding: "40px",lineHeight: "1.8"}}>
            <h1 style={{color: "#0082fc"}}>Customer Support:</h1>
            <p>
                Need help with ShopShere? We've gathered the most important
                information to help you shop with confidence.
            </p>
            <br /><hr />
             
            <div id="help" ref={helpRef}> <br /><br /><br />
                <h3 style={{color: "#0082fc"}}>Help Center:</h3>
                <ul>
                    <li>Browse products easily using categories and search.</li>
                    <li>Add your favorite products to your Wishlist.</li>
                    <li>Review your Cart before placing an order.</li>
                    <li>Update your profile information anytime.</li>
                    <li>Contact us if you experience any technical issues.</li>
                </ul>
            </div>

            <br /><hr />

            <div ref={faqRef} id="faq"><br /><br /><br />
                <h3 style={{color: "#0082fc"}}>Frequently Asked Questions (FAQs):</h3>
                <ol>
                    <li>
                        <strong>How do I create an account?</strong>
                        <p> Click the Register button and complete the registration form.</p>
                    </li>

                    <li>
                        <strong>How do I add products to my Wishlist?</strong>
                        <p>Click the heart icon on any product card to save it.</p>
                    </li>

                    <li>
                        <strong>Can I remove products from my Cart?</strong>
                        <p>Yes. Open your Cart and click the Remove button.</p>
                    </li>

                    <li>
                        <strong>How do I change my password?</strong>
                        <p>Go to your Profile page and select Change Password.</p>
                    </li>

                    <li>
                        <strong>Is my personal information secure?</strong>
                        <p>Yes. We value your privacy and protect your personal information.</p>
                    </li>
                </ol>
            </div>

            <br /><hr />

            <div ref={privacyRef} id="privacy"><br /><br /><br />
                <h3 style={{color: "#0082fc"}}>Privacy Policy:</h3>
                <ul>
                    <li>Your personal information is kept confidential.</li>
                    <li>We never sell your personal data to third parties.</li>
                    <li>Passwords are securely managed.</li>
                    <li>Your browsing experience may use cookies to improve usability.</li>
                    <li>Your data is used only to improve our services.</li>
                </ul>
            </div>

            <br /><hr />

            <div ref={termsRef} id="terms"><br /><br /><br />
                <h3 style={{color: "#0082fc"}}>Terms & Conditions:</h3>
                <ul>
                    <li>Use ShopSphere responsibly and respectfully.</li>
                    <li>Product availability may change without notice.</li>
                    <li>Prices are subject to updates whenever necessary.</li>
                    <li>Users are responsible for maintaining account security.</li>
                    <li>By using ShopSphere, you agree to these terms and conditions.</li>
                </ul>
            </div>
        </div>
    );}

export default CustomerSupport;