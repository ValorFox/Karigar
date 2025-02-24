import { Button } from "@nextui-org/react";
import { MagnifyingGlass } from "phosphor-react";
import React from "react";

function SearchBar() {
  return (
    <div className="lg:w-[30rem] w-[90vw] bg-[#4A4238] my-2 h-12 rounded-full flex justify-between items-center overflow-hidden shadow-black shadow-2xl">
      <input
        type="text"
        placeholder="search artwork ..."
        className="text-white px-3 border-none focus:outline-none w-[85%] h-full py-3 "
      />
      <Button className="h-full bg-[#B4A390] cursor-pointer">
        <MagnifyingGlass size={30} />
      </Button>
    </div>
  );
}

export default SearchBar;
