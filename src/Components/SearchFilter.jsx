// src/components/SearchFilter.jsx
import { useState } from "react";

const SearchFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
    onFilter({ category, minPrice, maxPrice });
  };

  return (
    <>
    <div className="w-full bg-white dark:bg-black p-4 shadow flex flex-col md:flex-row gap-4">
      <input
        type="text"
        placeholder="Search products..."
        className="border px-3 py-2 rounded w-full md:w-1/3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        className="border px-3 py-2 rounded w-full md:w-1/4"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="books">Books</option>
      </select>

      <div className="flex gap-2 w-full md:w-1/4">
        <input
          type="number"
          placeholder="Min"
          className="border px-2 py-2 rounded w-1/2"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          />
        <input
          type="number"
          placeholder="Max"
          className="border px-2 py-2 rounded w-1/2"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          />
      </div>

      <button
        className="bg-blue-600 dark:bg-orange-600 text-white px-4 py-2 rounded w-full md:w-auto"
        onClick={handleSearch}
      >
        Apply
      </button>
    </div>
        </>
  );
};

export default SearchFilter;
