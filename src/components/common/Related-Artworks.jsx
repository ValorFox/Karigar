import { Link } from "react-router-dom";
function getRelatedArtworks() {
  // This is a placeholder for your data fetching logic
  // In a real application, you would fetch related artworks from your API or database
  return [
    {
      id: "2",
      title: "Sunset Serenity",
      artist: "John Smith",
      price: 950,
      image:
        "https://cdn.pixabay.com/photo/2022/01/16/14/02/tinkering-6942109_1280.jpg",
    },
    {
      id: "3",
      title: "Urban Rhythm",
      artist: "Emma Johnson",
      price: 1100,
      image: "https://picsum.photos/300/500",
    },
    {
      id: "4",
      title: "Nature's Whisper",
      artist: "Michael Brown",
      price: 850,
      image:
        "https://cdn.pixabay.com/photo/2021/11/11/11/26/baskets-6786079_1280.jpg",
    },
  ];
}

export default function RelatedArtworks() {
  const relatedArtworks = getRelatedArtworks();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {relatedArtworks.map((artwork) => (
        <Link
          to={"#"}
          key={artwork.id}
          className="group  bg-[#B4A390] rounded-lg"
        >
          <div className="aspect-square relative overflow-hidden rounded-lg mb-2">
            <img
              src={artwork.image || "/placeholder.svg"}
              alt={artwork.title}
              className="object-cover transition-transform group-hover:scale-105 bg-rose-800"
            />
          </div>
          <div className="px-2 py-1">
            <h3 className="font-semibold text-lg">{artwork.title}</h3>
            <p className="text-muted-foreground">{artwork.artist}</p>
            <p className="font-bold mt-1">${artwork.price.toLocaleString()}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
