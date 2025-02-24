import React from "react";
import ProductCard from "./ProductCard";
import Artworks from "../../Constents/Artworks.json";

const MasonryGrid = () => {
  return (
    <div className="lg:p-4">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {Artworks.map((art, index) => (
          <ProductCard
            imageUrl={art.thumbnail}
            artistName={art.artist.name}
            productName={art.artwork_name}
            price={art.price}
            likes={art.likes}
            productId={art.id}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;
