import React from "react";
import CardUsernameTitle from "../common/CardUsernameTitle";
import Artworks from "../../Constents/Artworks.json";

function TrandingSection() {
  return (
    <section className="px-8 py-12">
      <h2 className="text-2xl mb-4 lg:text-start text-center">
        Featured Artworks
      </h2>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
        {Artworks.map((art, index) => (
          <CardUsernameTitle
            artId={art.id}
            url={art.thumbnail}
            artistName={art.artist.name}
            artworkName={art.artwork_name}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default TrandingSection;
