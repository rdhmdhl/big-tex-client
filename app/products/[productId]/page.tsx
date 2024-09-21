"use client";
import React, { useState } from "react";
import Image from "next/image";
import AddToCart from '../../components/AddToCart';
import { useCart } from "@/app/context/CartContext";
import { ProductSize } from "@/types/Product";
import { productData } from "@/app/data/products";

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { addToCart } = useCart();
  const { productId } = params;
  const product = productData[productId];
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to the cart.");
      return;
    }

    // Add the product with the selected size to the cart
    addToCart({ ...product, size: selectedSize });
  };

  return (
    <div className="product-page-container relative pb-[80px]">
    <div className="pt-[7rem] p-4 h-screen">
      <Image
        src={product.mainImage}
        alt="pants image"
        width={500}
        height={500}
        className="border-solid border border-black bg-neutral-200"
      />
      <div className="detail-images flex space-x-4 mt-4">
        {product.detailImages.map((imageSrc, index) => (
          <Image
            key={index}
            src={imageSrc}
            alt={`${product.name} detail image ${index + 1}`}
            width={100}
            height={100}
            className="border-solid border border-black bg-neutral-200 object-cover"
          />
        ))}
      </div>
      <h1 className="text-3xl">{product.name}</h1>
      <h2 className="text-xl">${product.price}</h2>
      <div className="produce-sizes flex w-2/4 items-center mb-4">
        <h3 className="mr-4 text-lg font-medium">Size:</h3>
        <div className="sizes flex space-x-4">
          {Object.values(ProductSize).map((size) => (
            <button
              key={size}
              className={`p-2 border ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"} w-[2rem] flex justify-center`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <p className="text-base text-gray-600">{product.description}</p>
      <AddToCart addItem={handleAddToCart} product={product}></AddToCart>
    </div>
    </div>
  );
}
