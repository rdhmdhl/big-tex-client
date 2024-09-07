"use client"; // Add this at the top of the file
import React from 'react'
// import AddToCart from './AddToCart';
import Image from 'next/image';

interface ProductCardProps {
  img: string;
  isActive: boolean;
  initialLoad?: boolean; // optinal prop to handle load animation
}

const ProductCard = ({ img, isActive, initialLoad }: ProductCardProps) => {
  return (
    <div className='product-card-container'>
        <Image
          src={img}
          alt='hoodie'
          width={1000}
          height={1000}
          className={`transition-transform duration-1000 ease-in-out ${
            isActive || initialLoad ? "scale-125" : "scale-100"
          } object-contain`}
        />
    </div>
  )
}

export default ProductCard
