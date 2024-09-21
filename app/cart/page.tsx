"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";

export default function Cart() {
  const { cart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let calculatedTotal = 0;
    for(let i = 0; i < cart.length; i++){
        calculatedTotal += cart[i].price;
    }
    setTotalPrice(calculatedTotal);
  }, [])

  return (
    <div className="cart-page flex flex-col justify-start items-center h-full w-full mt-[5rem]">
      <h2 className="text-xl font-semibold">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="w-3/4">
          {cart.map((item) => (
            <div key={item.id} className="cart-items-container flex items-center justify-between p-4 border-b">
            <Image src={item.mainImage} alt="cart item image" width={100} height={100} />
            <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-lg font-light">${item.price}</p>
                <p className="text-lg font-light">Size: {item.size}</p>
            </div>
            </div>
            ))}
        </div>
      )}
      <div className="totals-container flex flex-col justify-start w-3/4">
        <div className="shipping-price-container flex justify-between">
            <p>Shipping</p>
            <p>$0</p>
        </div>
        <div className="total-price-container flex justify-between">
            <p>Total</p>
            <p>${totalPrice}</p>
        </div>
      </div>
    </div>
  );
}
