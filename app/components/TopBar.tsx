"use client";
import React from "react";
import { GiTexas } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

const TopBar = () => {
  const { cart } = useCart();
  const router = useRouter();
  return (
    <div className="w-full h-[4rem] fixed flex bg-black place-content-around items-center top-0 left-0 z-50">
      <GiTexas className="text-white text-3xl" onClick={() => router.push('/')}/>
      <Image src="/Logo.png" alt="logo" width={200} height={200}></Image>
      <div className="cart-cont relative">
        {cart.length > 0 &&
          <p className="absolute -top-2 -right-1 text-white bg-red-500 m-0 p-1 rounded-full h-4 w-4 flex items-center justify-center">
            {cart.length}
          </p>
        }
        <FaShoppingCart className="text-white text-3xl" onClick={() => router.push('/cart')}/>
      </div>
    </div>
  );
};

export default TopBar;
