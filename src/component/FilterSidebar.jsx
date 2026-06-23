import "../CSS/Filter.css";

const FilterSidebar = ({
  isOpen,
  onClose,
  categories,
  selectedCategory,
  setSelectedCategory,
  selectedSort,
  setSelectedSort,
  applyFilters,
  resetFilters,
}) => {
  return (
    <>
      {isOpen && (
        <div
          className="overlay"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`filter-sidebar ${
          isOpen ? "open" : ""
        }`}
      >
        <div className="sidebar-header">
          <h2 style={{color:"#2AA1EC"}}>Filters</h2>

          <button style={{color:"#2AA1EC"}}
            className="close-btn"
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        <div className="filter-section">
          <h3 style={{color:"#2AA1EC"}}>Category</h3>

          <label>
            <input
              type="radio"
              name="category"
              value="All"
              checked={
                selectedCategory === "All"
              }
              onChange={(e) =>
                setSelectedCategory(
                  e.target.value
                )
              }
            />
            All
          </label>

          {categories.map((category) => (
            <label key={category}>
              <input
                type="radio"
                name="category"
                value={category}
                checked={
                  selectedCategory === category
                }
                onChange={(e) =>
                  setSelectedCategory(
                    e.target.value
                  )
                }
              />
              {category}
            </label>
          ))}
        </div>

        <div className="filter-section">
          <h3 style={{color:"#2AA1EC"}}>Sort By</h3>

          <label>
            <input
              type="radio"
              name="sort"
              value="lowToHigh"
              checked={
                selectedSort === "lowToHigh"
              }
              onChange={(e) =>
                setSelectedSort(
                  e.target.value
                )
              }
            />
            Price Low → High
          </label>

          <label>
            <input
              type="radio"
              name="sort"
              value="highToLow"
              checked={
                selectedSort === "highToLow"
              }
              onChange={(e) =>
                setSelectedSort(
                  e.target.value
                )
              }
            />
            Price High → Low
          </label>

          <label>
            <input
              type="radio"
              name="sort"
              value="az"
              checked={selectedSort === "az"}
              onChange={(e) =>
                setSelectedSort(
                  e.target.value
                )
              }
            />
            A → Z
          </label>

          <label>
            <input
              type="radio"
              name="sort"
              value="za"
              checked={selectedSort === "za"}
              onChange={(e) =>
                setSelectedSort(
                  e.target.value
                )
              }
            />
            Z → A
          </label>
        </div>

        <div className="sidebar-actions">
          <button
            className="apply-btn"
            onClick={applyFilters}
          >
            Apply Filter
          </button>

          <button
            className="reset-btn"
            onClick={resetFilters}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;