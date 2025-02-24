import React from "react";
import SearchBar from "./SearchBar";

function HeroSection() {
  return (
    <div className="w-full h-[25rem] flex justify-center items-center flex-col bg-[#F1E2C9]">
      <p className="lg:text-6xl mb-3 text-2xl text-center">Discover and Share Amazing Artwork</p>
      <small className="lg:text-xl text-sm text-center text-muted-foreground mb-8">
        Explore a world of creativity, get inspired, and connect with artists
        from around the globe.
      </small>

      <div className="w-full h-16 mt-8 flex justify-center items-center">
        <SearchBar />
      </div>
    </div>
  );
}

export default HeroSection;
