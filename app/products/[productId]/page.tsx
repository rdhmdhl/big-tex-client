// app/products/[productId]/page.tsx
import React from "react";
import Image from "next/image";
import AddToCart from '../../components/AddToCart';

type Product = {
  name: string;
  price: string;
  description: string;
  mainImage: string;
  detailImages: Array<string>;
};
// Fetch product data based on `productId` using your preferred method (API, file, etc.)
// For example purposes, here's mock data:
const productData: Record<string, Product> = {
  hoodie: {
    name: "Hoodie",
    price: "$250",
    description:
      "Features a premium, soft-touch fabric that provides unparalleled comfort and sophistication. Designed with a modern fit and refined detailing, it's perfect for elevating everyday casual wear.",
    mainImage: "/Hoodie-F-Resized.webp",
    detailImages: ["/Hoodie-B.webp", "/Hoodie-Detail.webp"],
  },
  pant: {
    name: "Pants",
    price: "$250",
    description: "Description of Product 2",
    mainImage: "/FPant-F.webp",
    detailImages: ["/Hoodie-B.webp", "/Hoodie-Detail.webp"],
  },
  "sl-pant": {
    name: "SL Pants",
    price: "$250",
    description: "Description of Product 3",
    mainImage: "/SLPant-F.webp",
    detailImages: ["/Hoodie-B.webp", "/Hoodie-Detail.webp"],
  },
};

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;
  const product = productData[productId];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-page-container relative pb-[80px]">
    <div className="pt-[7rem] p-4 h-screen">
      <Image
        src={product.mainImage}
        alt="pants image"
        width={500}
        height={500}
        className="border-solid border border-black bg-slate-300"
      />
      <div className="detail-images flex space-x-4 mt-4">
        {product.detailImages.map((imageSrc, index) => (
          <Image
            key={index}
            src={imageSrc}
            alt={`${product.name} detail image ${index + 1}`}
            width={100}
            height={100}
            className="border-solid border border-black bg-slate-300 object-cover"
          />
        ))}
      </div>
      <h1 className="text-3xl">{product.name}</h1>
      <h2 className="text-xl text-gray-700">{product.price}</h2>
      <div className="produce-sizes flex w-2/4 items-center mb-4">
        <h3 className="mr-4 text-lg font-medium">Size:</h3>
        <div className="sizes flex space-x-4">
          <h3 className="text-lg">S</h3>
          <h3 className="text-lg">M</h3>
          <h3 className="text-lg">L</h3>
          <h3 className="text-lg">XL</h3>
        </div>
      </div>
      <p className="text-base text-gray-600">{product.description}</p>
      <AddToCart></AddToCart>
    </div>
    </div>
  );
}
