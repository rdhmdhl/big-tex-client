"use client";
import React from "react";
import { GiTexas } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

const TopBar = () => {
  const { cart } = useCart();
  const router = useRouter();
  return (
    <div className="w-full h-[4rem] bg-white fixed flex justify-between items-center top-0 left-0 z-50 px-6">
      <GiTexas className="text-black text-3xl" onClick={() => router.push('/')}/>
      <div className="cart-cont relative">
        {cart.length > 0 &&
          <p className="absolute -top-2 -right-1 text-sm text-white bg-red-500 m-0 p-1 rounded-full h-4 w-4 flex items-center justify-center">
            {cart.length}
          </p>
        }
        <IoCartOutline className="text-black text-3xl" onClick={() => router.push('/cart')}/>
      </div>
    </div>
  );
};

export default TopBar;
