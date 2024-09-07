'use client';
import ProductCard from "./components/ProductCard";
import TopBar from "./components/TopBar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  // State to track the active card
  const [activeCard, setActiveCard] = useState(-1);
  const [loaded, setLoaded] = useState(false); // To handle the initial load animation
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window === "undefined") return;

    setTimeout(() => setLoaded(true), 100);

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
      threshold: .5
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
    <div className="home-container w-screen h-screen flex flex-col">
      {/* background image */}
      <Image
        className="object-cover object-center fixed top-0 left-0 w-full h-full -z-10"
        alt="background-image"
        src="/text-background.jpg"
        width={500}
        height={500}
      />
      {/* content */}
      <div className="topbar mb-20 z-100">
        <TopBar></TopBar>
      </div>

      <div className="products-container mt-10">
        {[ "/Hoodie-F.png", "/FPant-F.png", "/SL-Pant-F.png" ].map((img, index) => (
          <div
          className="product-card-mapper w-full mb-10 h-[800px]"
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el!
            }}
          >
            <ProductCard 
              img={img} 
              isActive={activeCard === index} 
              initialLoad={index === 0 && loaded}
              />
          </div>
        ))}
      </div>
    </div>
  );
}
