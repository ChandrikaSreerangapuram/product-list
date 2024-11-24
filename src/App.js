import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: "$10",
      image: "https://via.placeholder.com/150",
      description: "This is product 1",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      isFavorited: false,
      isExpanded: false,
      rating: 0,
    },
    {
      id: 2,
      name: "Product 2",
      price: "$20",
      image: "https://via.placeholder.com/150",
      description: "This is product 2",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      isFavorited: false,
      isExpanded: false,
      rating: 0,
    },
    {
      id: 3,
      name: "Product 3",
      price: "$30",
      image: "https://via.placeholder.com/150",
      description: "This is product 3",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      isFavorited: false,
      isExpanded: false,
      rating: 0,
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  // Toggle favorite state
  const toggleFavorite = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, isFavorited: !product.isFavorited }
        : product
    );
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  // Toggle show/hide details
  const toggleExpand = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, isExpanded: !product.isExpanded }
        : product
    );
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  const clearFavorites = () => {
    const updatedProducts = products.map((product) => ({
      ...product,
      isFavorited: false,
    }));
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  const showFavoritedOnly = () => {
    setFilteredProducts(products.filter((product) => product.isFavorited));
  };

  const showAllProducts = () => {
    setFilteredProducts(products);
  };

  return (
    <div className="app">
      <h1>Product List</h1>
      <div className="controls">
        <button onClick={clearFavorites}>Clear Favorites</button>
        <button onClick={showFavoritedOnly}>Show Favorited Only</button>
        <button onClick={showAllProducts}>Show All Products</button>
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            toggleFavorite={toggleFavorite}
            toggleExpand={toggleExpand}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
