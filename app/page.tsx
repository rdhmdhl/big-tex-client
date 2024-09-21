'use client';
import TopBar from "./components/TopBar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div 
      className="home-container w-screen h-screen flex flex-col bg-cover bg-center pt-[8rem]"
    >
      <div className="products-container flex flex-col pb-[10rem] overflow-y-scroll overflow-x-hidden">
        <div className="flex flex-col" onClick={() => router.push('products/hoodie')}>
            <Image 
              src="/Hoodie-F-Resized.webp"
              alt='hoodie'
              width={500}
              height={500}/>
        </div>
            <div className="flex flex-col" onClick={() => router.push('products/pant')}>
              <Image
                src="/FPant-F.webp"
                className="scale-125 mb-[8rem] mt-[8rem]"
                alt='hoodie'
                width={500}
                height={500}
                />
            </div>
            <div className="flex flex-col" onClick={() => router.push('products/sl-pant')}>
              <Image
                src="/SL-Pant-F.webp"
                className="scale-125 mb-10 mt-10"
                alt='hoodie'
                width={500}
                height={500}/>
            </div>
      </div>
    </div>
  );
}
