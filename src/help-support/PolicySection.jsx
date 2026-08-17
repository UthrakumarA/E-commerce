import "../CSS/CustomerSupport.css";

function PolicySection({id,title,icon,items}) {

    return (
        <section className="support-section" id={id}>
            <div className="policy-card">
                <h2 className="policy-title">
                    <span className="policy-icon">{icon}</span>
                    {title}
                </h2>
                <ul className="policy-list">
                    {items.map((item, index) => (
                        <li key={index}>
                            ✅ {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default PolicySection;