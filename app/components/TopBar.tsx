import React from 'react'
import { GiTexas } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import Image from 'next/image';

const TopBar = () => {
  return (
    <div className="w-full fixed flex bg-black place-content-around items-center top-0 left-0 z-50">
        <GiTexas className="text-white text-4xl"/>
        <Image src="/Logo.png" alt='logo' width={200} height={200}></Image>
        <FaShoppingCart className="text-white text-4xl"/>
    </div>
  )
}

export default TopBar
