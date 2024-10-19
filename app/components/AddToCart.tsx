"use client";
import React, {useState, useRef} from "react";
import { Product, ProductSize } from "../../types/Product";
import AddToCartIcon from "@/public/addtocart.svg";
import BuyNowIcon from "@/public/buynow.svg";

type AddToCartProps = {
  addItem: (product: Product) => void; // Typing the prop directly
  product: Product;
  selectedSize: ProductSize | null;
  
};

  

const AddToCart = ({ addItem, product, selectedSize }: AddToCartProps) => {
  const [addToCartAnimation, setAddToCartAnimation] = useState(false);
  const svgAddToCart = useRef<SVGSVGElement>(null);
  const svgBuyNow = useRef<SVGSVGElement>(null);
  
// Function to remove the animated class from the previous icon
// const removePreviousAnimation = (prevSize: ProductSize | null) => {
//   if (prevSize) {
//     const refMap = {
//       svgAddToCart: svgAddToCart,
//       svgBuyNow: svgBuyNow,
//     };
//     const previousSvgElement = refMap[prevSize]?.current;
//     if (previousSvgElement) {
//       const previousPath = previousSvgElement.querySelector("#overlayPath") as SVGPathElement | null;
//       if (previousPath) {
//         const classToRemove = sizeClasses[prevSize];
//         previousPath.classList.remove(classToRemove);
//       }
//     }
//   }
// };

const handleSizeClick = (svgRef: React.RefObject<SVGSVGElement>) => {
  // removePreviousAnimation(previousSize);
  // setSelectedSize(size);
  if (selectedSize){
    // Use the ref to get the SVG element and its child paths
    const svgElement = svgRef.current;
    if (svgElement) {
      const pathElement = svgElement.querySelector("#addCartOverlayPath") as SVGPathElement | null; // Find the specific path
      if (pathElement) {
        const classToApply = "cta-animated-path";
        pathElement.classList.add(classToApply);

        pathElement.addEventListener("animationend", () => {
          pathElement.classList.remove(classToApply);

        }, {once: true}); // ensures the event listener is removed after its called once 
      } else {
        console.log("path element not found");
      }
    }
  }
  // set size as previous so it will be removed next time
  // setPreviousSize(size);
};


  return (
    <div className="flex justify-between items-center w-full h-[10rem] mb-[4rem]">
      {/* <button
        className="custom-button-lg"
        onClick={() => addItem(product)}
      >
        ADD TO CART
      </button> */}
      <AddToCartIcon onClick={() => {
        addItem(product); 
        handleSizeClick(svgAddToCart);
        }} 
        ref={svgAddToCart}>
        </AddToCartIcon>
        <BuyNowIcon onClick={() => {
          addItem(product); 
          handleSizeClick(svgBuyNow)
          }} 
          ref={svgBuyNow}>
          </BuyNowIcon>
        
      {/* <button
        className='custom-button-lg'
        onClick={() => console.log("Buy Now")}
      >
        BUY NOW
      </button> */}
    </div>
  );
};

export default AddToCart;
