import { useState } from "react";
import { Input } from "@nextui-org/react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import HeroSection from "../components/specific/HeroSection";

export default function ArtworkLandingPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Artworks - Masonry Grid */}



    </div>
  );
}
