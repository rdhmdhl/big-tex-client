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
    <div className='product-card-container w-full h-full mb-44'>
        <Image
          src={img}
          alt='hoodie'
          width={500}
          height={500}
          className={`transition-transform duration-1000 ease-in-out ${
            isActive || initialLoad ? "scale-125" : "scale-105"
          } object-contain`}
        />
    </div>
  )
}

export default ProductCard
