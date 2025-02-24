import { useState } from "react";
import {
  Input,
  Textarea,
  Button,
  Select,
  SelectItem,
  Avatar,
} from "@nextui-org/react";

export const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];

export default function ArtistProfileCreation() {
  const [artist, setArtist] = useState({
    name: "",
    artType: "",
    bio: "",
    socialLinks: "",
    profilePic: "",
    artworks: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtist((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setArtist((prev) => ({ ...prev, profilePic: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-[#D1BE9C] shadow-lg rounded-lg m-4">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Create Your Artist Profile
      </h2>
      <div className="flex flex-col items-center mb-4">
        <Avatar
          src={artist.profilePic || "/default-avatar.png"}
          className="w-24 h-24 mb-2"
        />
        <input
          type="file"
          accept="image/*"
          placeholder="select a profile picture"
          onChange={handleFileUpload}
          className="text-sm bg-[#4A4238] rounded-xl text-white w-full h-10 p-2"
        />
      </div>
      <Input
        placeholder="Artist Name"
        name="name"
        value={artist.name}
        onChange={handleChange}
        fullWidth
        className="mb-4 bg-[#4A4238] rounded-xl text-white"
      />
      <Select
        placeholder="Art Type"
        name="artType"
        onChange={(e) =>
          setArtist((prev) => ({ ...prev, artType: e.target.value }))
        }
        className="mb-4 bg-[#4A4238] rounded-xl text-white"
      >
        {["Painting", "Sketch", "Digital Art", "3D", "Sculpture", "Photography"].map(
          (type) => (
            <SelectItem key={type} value={type} className="text-white bg-black/80 backdrop-blur-sm">
              {type}
            </SelectItem>
          )
        )}
      </Select>
      <Textarea
        label="Bio"
        name="bio"
        value={artist.bio}
        onChange={handleChange}
        fullWidth
        className="mb-4 bg-[#4A4238] rounded-xl text-white"
      />
      <Input
        placeholder="Social Media Links"
        name="socialLinks"
        value={artist.socialLinks}
        onChange={handleChange}
        fullWidth
        className="mb-4 bg-[#4A4238] rounded-xl text-white"
      />
      <Button
        color="primary"
        className="w-full bg-[#4A4238] text-white rounded-xl"
      >
        Create Profile
      </Button>
    </div>
  );
}
