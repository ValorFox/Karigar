import React from "react";
import { Button } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/specific/CartCard";

export default function Cartpage() {
  const items = useSelector((state) => state.cart.items);
  console.log(items);
  if (items&&items.length > 0) {
    return (
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {items &&
              items.length > 0 &&
              items.map((item) => (
                <CartItem
                  id={item.productId}
                  name={item.productName ? item.productName : "Art Name"}
                  description={item.description ? item.description : "None"}
                  price={item.price ? item.price : 0.0}
                  image={item.imageUrl}
                  seller={item.artistName}
                  quantity={1}
                  stock={8}
                />
              ))}
          </div>

          <div className="lg:col-span-1 ">
            <div className="rounded-lg p-6 sticky top-4 bg-[#D1BE9C]">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal (4 items)</span>
                  <span>$369.96</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>$29.60</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>$399.56</span>
                </div>
              </div>

              <Button className="w-full bg-primary text-white py-3 rounded-md font-medium hover:bg-primary/90 transition-colors bg-[#4A4238]">
                Proceed to Checkout
              </Button>

              <div className="mt-4 text-center text-sm text-black">
                Free shipping on orders over $50
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/102/102661.png"
          alt="Empty Cart"
          className="w-24 h-24 mb-4 opacity-50"
        />
        <h2 className="text-xl font-semibold">Your Cart is Empty</h2>
        <p className="text-gray-600">
          Looks like you haven't added anything yet.
        </p>
        <Link
          to="/"
          className="mt-4 px-6 py-2 bg-[#4A4238] text-white rounded-lg hover:bg-[#3c342c]"
        >
          Explore Products
        </Link>
      </div>
    );
  }
}
