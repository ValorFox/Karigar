import { useState } from "react";
import { Button } from "@nextui-org/react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export default function ImageGallery({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  if (images) {
    return (
      <div className="relative">
        <div className="aspect-square relative overflow-hidden rounded-lg bg-rose-700">
          <img
            src={images[currentImage]}
            alt={`Artwork image ${currentImage + 1}`}
            className="object-cover bg-green-500 h-full"
          />
        </div>
        <Button
          variant="outline"
          size="sm"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/70 backdrop-blur-sm shadow-black shadow-lg rounded-full cursor-pointer"
          onPress={prevImage}
        >
          <CaretLeft className="h-4 w-4" weight="fill" color="white" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/70 backdrop-blur-sm shadow-black shadow-lg rounded-full cursor-pointer"
          onPress={nextImage}
        >
          <CaretRight className="h-4 w-4" weight="fill" color="white" />
        </Button>
        <div className="mt-4 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentImage ? "bg-black" : "bg-neutral-400"
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative flex justify-center items-center">
        loading...
      </div>
    );
  }
}
