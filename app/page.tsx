'use client';
import ProductCard from "./components/ProductCard";
import TopBar from "./components/TopBar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  // State to track the active card
  const [activeCard, setActiveCard] = useState(-1);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window === "undefined") return;

    // Callback for intersection observer
    const callback: IntersectionObserverCallback = (entries) => {
      let closestIndex = -1;
      let minDistance = Infinity;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const rect = entry.boundingClientRect;
          const viewportHeight = window.innerHeight;
          const elementCenter = rect.top + rect.height / 2;
          const viewportCenter = viewportHeight / 2;
          const distanceFromCenter = Math.abs(viewportCenter - elementCenter);
          // Update the closest index if this element is closer to the center
          if (distanceFromCenter < minDistance) {
            minDistance = distanceFromCenter;
            closestIndex = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          }
        }
      });

      if (closestIndex !== -1) {
        setActiveCard(closestIndex);
      }
    };

    // Intersection Observer configuration
    const observer = new IntersectionObserver(callback, {
      root: null, // Use the viewport as the root
      threshold: 1.0
    });

    // Observe each card
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup observer on component unmount
    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      observer.disconnect();
    };
  }, []);


  return (
    <div 
      className="home-container w-screen h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage: "url('/text-background.jpg')",
        backgroundAttachment: "fixed", // This will make the background image stay fixed
    }}
    >
      {/* content */}
      <div className="topbar-main-container w-full ">
        <TopBar></TopBar>
      </div>

      <div className="products-container flex flex-col pt-[8rem] overflow-y-scroll overflow-x-hidden">

        {[ "/Hoodie-F.webp", "/FPant-F.webp", "/SL-Pant-F.webp" ].map((img, index) => (
          <div
          className="product-card-mapper w-full h-auto mb-44 flex"
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el!
            }}
          >
            <ProductCard 
              img={img} 
              isActive={activeCard === index} 
              />
          </div>
        ))}
      </div>
    </div>
  );
}
