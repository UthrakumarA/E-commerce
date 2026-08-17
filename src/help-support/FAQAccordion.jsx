import { useState } from "react";
import "../CSS/CustomerSupport.css";

const faqs = [
    {
        question: "How do I create an account?",
        answer:
            "Click the Register button on the login page and complete the registration form.",
    },
    {
        question: "How do I add products to my Wishlist?",
        answer:
            "Click the ❤️ heart icon on any product card to save it to your Wishlist.",
    },
    {
        question: "Can I remove products from my Cart?",
        answer:
            "Yes. Open your Cart page and click the Remove button beside the product.",
    },
    {
        question: "How do I change my password?",
        answer:
            "Go to your Profile page, click the edit icon next to Password, update it, and click Save.",
    },
    {
        question: "Is my personal information secure?",
        answer:
            "Yes. ShopSphere keeps your personal information private and uses it only to improve your experience.",
    },
];

function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => {setOpenIndex(openIndex === index ? null : index);};

    return (
        <section className="support-section" id="faq">
            <h2>❓ Frequently Asked Questions</h2>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div className="faq-card" key={index}>
                        <button className="faq-question"onClick={() => toggleFAQ(index)}>
                            <span>{faq.question}</span>

                            <span className={`faq-arrow ${openIndex === index ? "rotate" : ""}`}>
                                ▼
                            </span>
                        </button>

                        <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQAccordion;