import { useState } from "react";
import { Star } from "phosphor-react";
import { Link } from "react-router-dom";
import {
  Input,
  Button,
  Avatar,
  Card,
  CardBody,
  CardFooter,
} from "@nextui-org/react";
const artists = [
  {
    id: 1,
    name: "Emily Carter",
    artType: "Digital Art",
    joinedOn: "March 2022",
    rating: 4.8,
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    artworks: [
      "https://cdn.pixabay.com/photo/2024/01/11/21/17/ai-generated-8502630_1280.jpg",
      "https://cdn.pixabay.com/photo/2023/11/17/14/40/street-art-8394476_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/10/29/19/15/graffiti-508272_1280.jpg",
    ],
    bio: "Passionate digital artist creating futuristic concepts.",
    social: { instagram: "#", twitter: "#", website: "#" },
  },
  {
    id: 2,
    name: "James Thompson",
    artType: "Oil Painting",
    joinedOn: "July 2021",
    rating: 4.6,
    image: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
    artworks: [
      "https://cdn.pixabay.com/photo/2017/11/11/21/08/paint-2940513_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/10/10/34/painting-1813968_1280.jpg",
      "https://cdn.pixabay.com/photo/2022/10/05/17/30/woman-7501214_1280.jpg",
    ],
    bio: "Specializing in hyper-realistic oil paintings.",
    social: { instagram: "#", twitter: "#", website: "#" },
  },
];

export default function ArtistsPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-[#F2E9E1] min-h-screen px-8 py-12">
      {/* Header & Search */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">Explore Our Artists</h1>
        <p className="mt-2 text-lg">
          Find talented artists and their amazing artworks
        </p>
        <div className="mt-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search for artists..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#B4A390] text-black rounded-full px-4 shadow-2xl shadow-black py-3 outline-0"
          />
        </div>

        <Button className="bg-[#B4A390] mt-8 rounded-full shadow-black/50 shadow-sm">
          <Link to={"/artist-signup"}>Join as an Artist</Link>
        </Button>
      </div>

      {/* Artists Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {artists.map((artist) => (
          <Card
            key={artist.id}
            className="p-4 bg-[#B4A390] shadow-lg rounded-2xl"
          >
            <CardBody className="flex flex-col items-center text-center">
              <Avatar src={artist.image} size="lg" className="mb-4" />
              <h2 className="text-xl font-semibold">{artist.name}</h2>
              <p className="text-sm">{artist.artType}</p>
              <p className="text-xs">Joined: {artist.joinedOn}</p>
              <div className="flex items-center mt-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="ml-1 text-sm">{artist.rating}</span>
              </div>
            </CardBody>
            <CardFooter className="flex flex-col items-center">
              {/* Artwork Preview */}
              <div className="flex space-x-2 mb-3">
                {artist.artworks.slice(0, 3).map((art, index) => (
                  <img
                    key={index}
                    src={art}
                    alt="art"
                    className="w-12 h-12 rounded-md"
                  />
                ))}
              </div>
              {/* Actions */}
              <div className="flex space-x-2">
                <Button size="sm" color="primary">
                  Follow
                </Button>
                <Button size="sm" color="secondary">
                  Message
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
