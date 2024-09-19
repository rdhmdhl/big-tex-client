'use client';
import React from 'react'

const AddToCart = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-300 p-4 flex justify-center items-center w-full h-[7rem] border-t border-black">
      <button className='p-4 border border-black bg-black text-white text-lg w-2/4 m-2' onClick={() => console.log("added to cart")}>ADD TO CART</button>
      <button className='p-4 border border-black w-2/4 m-2 text-lg' onClick={() => console.log("added to cart")}>BUY NOW</button>
    </div>
  )
}

export default AddToCart
