import { useState } from "react";
import products from "../data/products";
import ProductCard from "../component/ProductCard";
import FilterSidebar from "../component/FilterSidebar";

import "../CSS/index.css";

const Products = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] =
    useState(1);

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [selectedSort, setSelectedSort] =
    useState("");

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [activeSort, setActiveSort] =
    useState("");

  const categories = [
    ...new Set(
      products.map(
        (product) => product.category
      )
    ),
  ];

  const filteredProducts = products.filter(
    (product) => {
      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All"
          ? true
          : product.category ===
            activeCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    }
  );

  const sortedProducts = [
    ...filteredProducts,
  ];

  if (activeSort === "lowToHigh") {
    sortedProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  if (activeSort === "highToLow") {
    sortedProducts.sort(
      (a, b) => b.price - a.price
    );
  }

  if (activeSort === "az") {
    sortedProducts.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  if (activeSort === "za") {
    sortedProducts.sort((a, b) =>
      b.title.localeCompare(a.title)
    );
  }

  const productsPerPage = 8;

  const lastIndex =
    currentPage * productsPerPage;

  const firstIndex =
    lastIndex - productsPerPage;

  const currentProducts =
    sortedProducts.slice(
      firstIndex,
      lastIndex
    );

  const totalPages = Math.ceil(
    sortedProducts.length /
      productsPerPage
  );

  const applyFilters = () => {
    setActiveCategory(
      selectedCategory
    );

    setActiveSort(selectedSort);

    setCurrentPage(1);

    setSidebarOpen(false);
  };

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedSort("");

    setActiveCategory("All");
    setActiveSort("");

    setCurrentPage(1);

    setSidebarOpen(false);
  };

  return (
    <div className="products-page">
      <div className="search-container">
        <input className="search-input" type="text" placeholder="Search products..."value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

        <button
          className="filter-toggle"
          onClick={() =>
            setSidebarOpen(true)
          }
        >
          ☰
        </button>
      </div>

      <b><p className="product-count">
        Total Product : {
          sortedProducts.length
        } 
      </p></b>

      <div className="grid">
        {currentProducts.length >
        0 ? (currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            )
          )
        ) : (
          <h2>
            No Products Found
          </h2>
        )}
      </div>

      <div className="pagination">
        <button className="page-btn" disabled={currentPage === 1}onClick={() =>setCurrentPage(currentPage - 1)}>
        Previous
        </button>

        <span className="page-info">
          Page {currentPage} of{" "}
          {totalPages}
        </span>

        <button className="page-btn"disabled={currentPage ===totalPages}onClick={() =>setCurrentPage(currentPage + 1)}>
        Next
        </button>
      </div>

      <FilterSidebar
        isOpen={sidebarOpen}
        onClose={() =>
          setSidebarOpen(false)
        }
        categories={categories}
        selectedCategory={
          selectedCategory
        }
        setSelectedCategory={
          setSelectedCategory
        }
        selectedSort={selectedSort}
        setSelectedSort={
          setSelectedSort
        }
        applyFilters={applyFilters}
        resetFilters={resetFilters}
      />
    </div>
  );
};

export default Products;