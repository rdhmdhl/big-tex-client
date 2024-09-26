"use client";
import React from "react";
import { Product } from "../../types/Product";

type AddToCartProps = {
  addItem: (product: Product) => void; // Typing the prop directly
  product: Product;
};

const AddToCart = ({ addItem, product }: AddToCartProps) => {
  return (
    <div className="flex justify-center items-center w-full h-[10rem] mb-[4rem]">
      <button
        className="p-4 border border-black bg-black text-white text-lg w-2/4 m-2"
        onClick={() => addItem(product)}
      >
        ADD TO CART
      </button>
      <button
        className="p-4 border border-black w-2/4 m-2 text-lg"
        onClick={() => console.log("Buy Now")}
      >
        BUY NOW
      </button>
    </div>
  );
};

export default AddToCart;
