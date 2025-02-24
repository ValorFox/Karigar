import { Button } from "@nextui-org/react";
import HeroSection from "../components/specific/HeroSection";
import TrandingSection from "../components/specific/TrandingSection";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="container mx-auto max-w-[100vw] overflow-x-hidden bg-[]">
      <HeroSection />
      <TrandingSection />
      {/* Categories & Filters */}
      <section className="px-8 py-6 bg-[#]">
        <h2 className="text-2xl font-semibold mb-4">Explore Categories</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {[
            "Painting",
            "Sketch",
            "Digital Art",
            "3D",
            "NFT",
            "Photography",
          ].map((category) => (
            <Button key={category} variant="bordered" className="px-6 py-2">
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 py-12 text-center bg-[#D1BE9C] text-[#4A4238]">
        <h2 className="text-3xl font-semibold">
          Start Selling Your Art Today!
        </h2>
        <p className="mt-2">Join thousands of artists showcasing their work.</p>
        <Button color="secondary" className="mt-4 px-6 py-2">
          <Link to={"/artist-signup"}>Join as an Artist</Link>
        </Button>
      </section>
    </div>
  );
};

export default Homepage;
