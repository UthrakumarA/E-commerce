import { useState } from "react";
import products from "../data/products";
import ProductCard from "../component/ProductCard";

const Products = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const productsPerPage = 8;

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  const currentProducts = filteredProducts.slice(
    firstIndex,
    lastIndex
  );

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  return (
    <div className="products-page">
      <div className="search">
      <h1>All Products</h1>

      <span className="search_icon">🔍<input className="search_input" type="text" placeholder="Search Product" value={search} onChange={(e) => { 
        setSearch(e.target.value);
        setCurrentPage(1); 
      }} /></span>
      </div> 
      <div className="grid">
        {currentProducts.length > 0 ? ( currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            /> )) ) : ( <h2>No Products Found</h2> )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          paddingBottom:"20px"
        }}>
        <button className="page_btn" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Previous
        </button>

        <span className="page_text">
          Page {currentPage} of {totalPages}
        </span>

        <button className="page_btn" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;