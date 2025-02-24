import React from "react";
import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function CardUsernameTitle({ artId, url, artworkName, artistName, index }) {
  return (
    <Card
      key={index}
      className="break-inside-avoid bg-[#B4A390] shadow-lg rounded-2xl overflow-hidden shadow-[#9f8a73]"
    >
      <CardBody>
        <img src={url} alt="Artwork" className="w-full h-auto object-cover" />
      </CardBody>
      <CardFooter className="flex flex-col items-start">
        <div className="flex flex-col items-start">
          <p className="font-semibold">{artworkName}</p>
          <small className="text-black font-semibold">{artistName}</small>
        </div>

        <Link to={`/artwork-purchase/${artId}`} className="w-full">
          <button className="w-full bg-[#181616] rounded-lg text-white mt-3 py-2"> Explore</button>
        </Link>

        {/* <Button
          size="md"
          className="w-full bg-[#181616] rounded-lg text-white mt-3"
        >
          <Link
            to={`/artwork-purchase/2`}
            className="w-full h-full flex items-center justify-center bg-rose-700"
          >
            Explore
          </Link>
        </Button> */}
      </CardFooter>
    </Card>
  );
}

export default CardUsernameTitle;
