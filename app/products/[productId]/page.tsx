"use client";
import React, { useEffect, useState, useRef, forwardRef } from "react";
import Image from "next/image";
import AddToCart from '../../components/AddToCart';
import { useCart } from "@/app/context/CartContext";
import { Product, ProductSize } from "@/types/Product";
import { productData } from "@/app/data/productsData";
import SmallSizeIcon from "@/public/s-35.svg";
import MediumSizeIcon from "@/public/m-35.svg";
import LargeSizeIcon from "@/public/l-35.svg";
import XLSizeIcon from "@/public/xl-35.svg"; 

// import SizeIcon from "@/app/components/animations/SizeIcon";
// import MediumSizeIcon from "@/path-to-icons/MediumSize.svg";
// import LargeSizeIcon from "@/path-to-icons/LargeSize.svg";

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { addToCart } = useCart();
  const { productId } = params;
  const product = productData[productId];
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [previousSize, setPreviousSize] = useState<ProductSize | null>(null);
  const [selectedImage, setSelectedImage] = useState(product.mainImage);
  const [availableImages, setAvailableImages] = useState(product.detailImages);
  const [animatedSizes, setAnimatedSizes] = useState<Partial<Record<ProductSize, boolean>>>({});
  const svgRefS = useRef<SVGSVGElement>(null);
  const svgRefM = useRef<SVGSVGElement>(null);
  const svgRefL = useRef<SVGSVGElement>(null);
  const svgRefXL = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    console.log("animatedSizes: ", animatedSizes);
  }, [animatedSizes])

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

  const updateSelectedImage = (image: string) => {
    // Replace the clicked image with the current main image in the available images
    const newImages = availableImages.map((img) => (img === image ? selectedImage : img));

    setAvailableImages(newImages);
    setSelectedImage(image);
  };

  const sizeClasses = {
    S: 'small-animated-path',
    M: 'medium-animated-path',
    L: 'large-animated-path',
    XL: 'xl-animated-path'
  };

  // Function to remove the animated class from the previous icon
  const removePreviousAnimation = (prevSize: ProductSize | null) => {
    if (prevSize) {
      const refMap = {
        S: svgRefS,
        M: svgRefM,
        L: svgRefL,
        XL: svgRefXL,
      };
      const previousSvgElement = refMap[prevSize]?.current;
      if (previousSvgElement) {
        const previousPath = previousSvgElement.querySelector("#overlayPath") as SVGPathElement | null;
        if (previousPath) {
          const classToRemove = sizeClasses[prevSize];
          previousPath.classList.remove(classToRemove);
        }
      }
    }
  };

  const handleSizeClick = (size: ProductSize, svgRef: React.RefObject<SVGSVGElement>) => {
    removePreviousAnimation(previousSize);
    setSelectedSize(size);
    
    // Use the ref to get the SVG element and its child paths
    const svgElement = svgRef.current;
    if (svgElement) {
      const pathElement = svgElement.querySelector("#overlayPath") as SVGPathElement | null; // Find the specific path
      if (pathElement) {
        const classToApply = sizeClasses[size];
        pathElement.classList.toggle(classToApply);
      } else {
        console.log("path element not found");
      }
    }
    // set size as previous so it will be removed next time
    setPreviousSize(size);
  };

  return (
    <div className="product-page-container relative pb-[80px]">
    <div className="pt-[7rem] p-4 h-screen">
      <div className="main-image-container flex justify-end w-[350px] h-[350px]">
        <Image
          src={selectedImage}
          alt="pants image"
          width={350}
          height={350}
          className="object-cover"
        />
      </div>
      <div className="detail-images flex justify-start space-x-4 mt-4 w-[100px] h-[100px]">
        {availableImages.map((imageSrc, index) => ( 
          <Image
            key={index}
            src={imageSrc}
            alt={`${product.name} detail image ${index + 1}`}
            width={100}
            height={100}
            className="object-cover"
            onClick={() => updateSelectedImage(imageSrc)}
          />
        ))}
      </div>
      <div className="name-and-price-container flex flex-col w-4/4 justify-center items-center mt-5">
        <h1 className="text-3xl font-bold text-neutral-700">{product.name}</h1>
        <h2 className="text-xl text-neutral-700">${product.price}</h2>
      </div>
      <div className="flex  w-4/4 justify-center items-center">
        <div className="produce-sizes flex w-3/4 items-center justify-between mb-4 mt-4">
            <SmallSizeIcon
              ref={svgRefS}
              style={{width:"24px", height:"30px"}}
              onClick={() => handleSizeClick("S" as ProductSize, svgRefS)}>
              </SmallSizeIcon>
              <MediumSizeIcon
                ref={svgRefM}
                style={{width:"40px", height:"28px"}}
                onClick={() => handleSizeClick("M" as ProductSize, svgRefM)}>
              </MediumSizeIcon>
              <LargeSizeIcon
                ref={svgRefL}
                style={{width:"27px", height:"28px"}}
                onClick={() => handleSizeClick("L" as ProductSize, svgRefL)}>
              </LargeSizeIcon>
              <XLSizeIcon
                ref={svgRefXL}
                style={{width:"61", height:"30px"}}
                onClick={() => handleSizeClick("XL" as ProductSize, svgRefXL)}>
              </XLSizeIcon>
        </div>
      </div>
      <p className="text-base text-neutral-700 text-center">{product.description}</p>
      <AddToCart addItem={handleAddToCart} product={product} selectedSize={selectedSize}></AddToCart>
    </div>
    </div>
  );
}
