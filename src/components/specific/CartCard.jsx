import { useState } from "react";
import { useDispatch } from "react-redux";
import { Minus, Plus, Heart, Trash } from "phosphor-react";
import { removeItemFromCart } from "../../Redux/Slice/cartSlice.js";

export default function CartItem({
  id,
  name,
  description,
  price = 199.99,
  discountedPrice = 199.99,
  image,
  seller,
  quantity: initialQuantity = 1,
  stock = 10,
  estimatedDelivery = "2-3 business days",
  onQuantityChange,
  onRemove,
  onSaveForLater,
}) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const dispatch = useDispatch();

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange?.(id, newQuantity);
    }
  };

  const handleIncrease = () => {
    if (quantity < stock) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange?.(id, newQuantity);
    }
  };

  const handleRemove = () => {
    dispatch(removeItemFromCart(id));
  };

  const handleSaveForLater = () => {
    onSaveForLater?.(id);
  };

  const subtotal = (discountedPrice || price) * quantity;

  return (
    <div className="flex flex-col sm:flex-row shadow shadow-[#9a8b72] rounded-lg p-4 mb-4 gap-4 hover:shadow-md transition-shadow bg-[#D1BE9C]">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          width={120}
          height={120}
          className="rounded-md object-cover w-full sm:w-[120px] h-[120px]"
        />
      </div>

      {/* Product Details */}
      <div className="flex-grow">
        <div className="flex flex-col sm:flex-row justify-between">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-black line-clamp-2 mt-1">
              {description}
            </p>
            <p className="text-sm mt-1">
              <span className="text-neutral-950">Sold by: </span>
              <span className="font-medium">{seller}</span>
            </p>
            <p className="text-sm text-black mt-1">
              <span className="text-green-600 font-medium">In Stock: </span>
              {stock} available
            </p>
            <p className="text-sm text-black mt-1">
              <span>Estimated Delivery: </span>
              {estimatedDelivery}
            </p>
          </div>

          <div className="mt-2 sm:mt-0 text-right">
            <div className="flex items-center gap-2 sm:justify-end">
              {discountedPrice ? (
                <>
                  <span className="font-bold text-lg">
                    ${discountedPrice.toFixed(2)}
                  </span>
                  <span className="text-gray-500 line-through text-sm">
                    ${price.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="font-bold text-lg">${price.toFixed(2)}</span>
              )}
            </div>
          </div>
        </div>

        {/* Quantity and Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
          <div className="flex items-center">
            <span className="mr-2 text-sm font-medium">Quantity:</span>
            <div className="flex items-center border rounded-md">
              <button
                onClick={handleDecrease}
                disabled={quantity <= 1}
                className="px-2 py-1 text-black hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" color="black" />
              </button>
              <span className="px-4 py-1 text-center w-10">{quantity}</span>
              <button
                onClick={handleIncrease}
                disabled={quantity >= stock}
                className="px-2 py-1 text-gray-600 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" color="black" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-3 sm:mt-0">
            <button
              onClick={handleSaveForLater}
              className="flex items-center text-sm text-gray-600 hover:text-primary"
            >
              <Heart className="w-4 h-4 mr-1" />
              Save for later
            </button>
            <button
              onClick={handleRemove}
              className="flex items-center text-sm text-red-500 hover:text-red-700"
            >
              <Trash className="w-4 h-4 mr-1" />
              Remove
            </button>
          </div>
        </div>

        {/* Subtotal - Mobile view shows it at the bottom */}
        <div className="mt-3 sm:text-right bg-[#D1BE9C] ">
          <p className="font-semibold">
            Subtotal:{" "}
            <span className="text-primary">${subtotal.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
