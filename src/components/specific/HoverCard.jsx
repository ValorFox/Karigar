import React from "react";

function HoverCard({ url }) {
  return (
    <div className=" max-w-[20rem] max-h-[30rem] bg-rose-600 relative rounded-lg overflow-hidden shadow-md shadow-black/80">
      <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent">
        <div className=" h-56 bg-black/40 backdrop-blur-md border-neutral-700 absolute top-[8rem] right-2 px-1 py-2 rounded-full text-neutral-200">
          <small>Likes : 24</small>
        </div>
        <div className="w-full h-16 z-10 absolute bottom-0 px-2">
          <p className="text-neutral-400 text-lg">Abstract Harmony</p>
          <small className="text-neutral-300">Jane Doe</small>
        </div>
      </div>
      <img
        src={url}
        alt="art image"
        className="object-fill object-center w-full h-full "
      />
    </div>
  );
}

export default HoverCard;
