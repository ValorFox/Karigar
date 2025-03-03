import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCartSimple } from "phosphor-react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/Slice/cartSlice";

export default function ProductCard({
  imageUrl,
  productId,
  artistName,
  productName,
  price = 0,
  likes = 0,
  description,
}) {
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked((prev) => !prev);
  };
  const dispatch = useDispatch();
  
  const additemTocart = () => {
    dispatch(
      addItemToCart({
        productId,
        productName,
        imageUrl,
        artistName,
        price,
        description,
      })
    );
  };

  return (
    <Card className="max-w-sm rounded-lg bg-[#B4A390] shadow-lg shadow-[#9f8a73]">
      <CardBody className="p-0 w-full">
        <Link to={`/artwork-purchase/${productId}`}>
          <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent"></div>
        </Link>

        <img
          src={imageUrl || "/placeholder.svg"}
          alt={productName}
          className="w-full object-fit hover:cursor-pointer"
        />

        <div className="w-full h-16 z-10 absolute bottom-0 px-2">
          <p className="text-neutral-400 text-lg">{productName}</p>
          <small className="text-neutral-300">{artistName}</small>
        </div>
      </CardBody>
      <CardFooter className="flex flex-col justify-between items-center lg:px-4 py-0.5 bg-[#B4A390] px-0.5">
        <div className="w-full h-10 flex items-center">
          <p className="font-bold mt-1">{price}</p>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex items-center lg:space-x-2 lg:w-auto">
            <Button
              isIconOnly
              variant="light"
              aria-label="Like"
              onPress={handleLike}
            >
              {liked ? (
                <Heart size={28} weight="fill" color="#4A4238" />
              ) : (
                <Heart size={28} />
              )}
            </Button>
            <small>{likes}</small>
          </div>
          <span className="text-sm"></span>
          <Button
            className="bg-[#181616] rounded-lg lg:text-sm text-xs text-white my-1"
            endContent={<ShoppingCartSimple size={18} color="#B4A390" />}
            onPress={additemTocart}
          >
            <p className="font-light text-white lg:text-sm lg:inline hidden">
              Add to cart
            </p>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

{
}
