import { Star, Truck } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Button, Divider } from "@nextui-org/react";
import Reviews from "../components/specific/Reviews";
import ImageGallery from "../components/specific/Image-Gallery";
import RelatedArtworks from "../components/common/Related-Artworks";
import { useState, useEffect } from "react";
import Artworks from "../Constents/Artworks.json";

function getArtwork(id) {
  return Artworks.find((art) => art.id == id);
}

export default function ArtworkPage() {
  const { artid } = useParams();
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    const art = getArtwork(artid);
    setArtwork(art);
  }, [artid]);

  if (artwork) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ImageGallery images={artwork.images} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">{artwork.artwork_name}</h1>
            <p className="text-xl mt-2">by {artwork.artist.name}</p>
            <div className="flex items-center mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5`}
                    color="black"
                    weight={`${
                      i < Math.floor(artwork.ratings) ? "fill" : "regular"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">
                ({artwork.reviewCount} reviews)
              </span>
            </div>
            <p className="text-3xl font-bold mt-6">
              {artwork.price.toLocaleString()}
            </p>
            <Button
              className="mt-6 w-full md:w-auto bg-[#181616] text-yellow-50 rounded-lg hover:cursor-pointer"
              size="lg"
            >
              Add to Cart
            </Button>
            <Divider className="my-8" />
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-muted-foreground">{artwork.description}</p>
            <h2 className="text-xl font-semibold mt-8 mb-4">Specifications</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Medium:</strong> Acrylic on canvas
              </li>
              <li>
                <strong>Size:</strong> {artwork.specifications}
              </li>
              <li>
                <strong>Year:</strong> 2023
              </li>
            </ul>
            <div className="flex items-center mt-8 text-muted-foreground">
              <Truck className="w-5 h-5 mr-2" />
              <p>Free shipping on orders over $1000</p>
            </div>
          </div>
        </div>
        <Divider className="my-12 bg-[#181616] h-[.2px]" />
        <Reviews reviews={artwork.reviews} />
        <Divider className="my-12" />
        <h2 className="text-2xl font-bold mb-6">Related Artworks</h2>
        <RelatedArtworks />
      </div>
    );
  } else {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}
