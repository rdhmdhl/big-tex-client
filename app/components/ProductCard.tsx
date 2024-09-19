"use client"; // Add this at the top of the file
import React, {useEffect} from 'react'
// import AddToCart from './AddToCart';
import Image from 'next/image';

interface ProductCardProps {
  img: string;
}

const ProductCard = ({ img }: ProductCardProps) => {

  return (
    <div className='product-card-container w-full h-full justify-center'>
        <Image
          src={img}
          alt='hoodie'
          width={500}
          height={500}
        />
    </div>
  )
}

export default ProductCard
