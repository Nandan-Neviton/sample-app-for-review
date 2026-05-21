import React, { useState } from "react";

const products = [
  "iPhone 15",
  "Samsung Galaxy S24",
  "MacBook Air",
  "Sony Headphones",
  "Dell Monitor"
];

export default function ProductSearch() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("");

  const handleSearch = () => {
    const trimmedKeyword = keyword.trim();

    if (!trimmedKeyword) {
      setMessage("Please enter a search term");
      setResults([]);
      return;
    }

    const filteredProducts = products.filter((product) =>
      product.toLowerCase().includes(trimmedKeyword.toLowerCase())
    );

    setResults(filteredProducts);

    if (filteredProducts.length === 0) {
      setMessage("No products found");
    } else {
      setMessage("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Search</h2>

      <input
        type="text"
        placeholder="Search products"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <button onClick={handleSearch} style={{ marginLeft: "10px" }}>
        Search
      </button>

      <div style={{ marginTop: "20px" }}>
        {message && <p>{message}</p>}

        <ul>
          {results.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}