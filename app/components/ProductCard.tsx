"use client"; // Add this at the top of the file
import React, {useEffect} from 'react'
// import AddToCart from './AddToCart';
import Image from 'next/image';

interface ProductCardProps {
  img: string;
  isActive: boolean;
}

const ProductCard = ({ img, isActive }: ProductCardProps) => {

  return (
    <div className='product-card-container w-full h-full justify-center'>
        <Image
          src={img}
          alt='hoodie'
          width={500}
          height={500}
          className={`transition-transform duration-1000 ease-in-out ${
            isActive? "scale-110" : "scale-100"
          } object-contain`}
        />
    </div>
  )
}

export default ProductCard
