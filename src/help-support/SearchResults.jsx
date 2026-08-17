import "../CSS/CustomerSupport.css";

function SearchResults({ results, onSelect }) {
    if (results.length === 0) {
        return (
            <div className="search-empty">
                😕 No matching results found.
            </div>
        );
    }

    return (
        <div className="search-results">
            {results.map((item, index) => (
                <div key={index} className="search-result-card" onClick={() => onSelect(item.id)}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default SearchResults;