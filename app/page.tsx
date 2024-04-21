import Link from "next/link";
import ProductCard from "./components/ProductCard";
import TopBar from "./components/TopBar";
import BackgroundVideo from "./components/BackgroundVideo";

export default function Home() {
  return (
    <main>
      <TopBar></TopBar>
      <BackgroundVideo/>
      <Link href="/products/pants">Pants</Link>
      <ProductCard/>
    </main>
  );
}
