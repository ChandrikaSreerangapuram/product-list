import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, toggleFavorite, toggleExpand }) => {
  return (
    <div className={`product-card ${product.isFavorited ? "favorited" : ""}`}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="price">{product.price}</p>
      <p>{product.description}</p>
      <button
        className="favorite-button"
        onClick={() => toggleFavorite(product.id)}
      >
        {product.isFavorited ? "❤️ Unfavorite" : "🤍 Favorite"}
      </button>
      <button
        className="expand-button"
        onClick={() => toggleExpand(product.id)}
      >
        {product.isExpanded ? "Hide Details" : "Show Details"}
      </button>
      {product.isExpanded && (
        <ul className="features">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductCard;
