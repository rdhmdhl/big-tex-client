import { Product, ProductSize } from '@/types/Product';

export const productData: Record<string, Product> = {
    hoodie: {
      name: "Pull Over",
      id: 1,
      price: 250,
      size: ProductSize.Medium,
      description:
        "Features a premium, soft-touch fabric that provides unparalleled comfort and sophistication. Designed with a modern fit and refined detailing, it's perfect for elevating everyday casual wear.",
      mainImage: "/Hoodie-F-Resized.webp",
      detailImages: ["/Hoodie-B.webp", "/Hoodie-Detail.webp"],
    },
    pant: {
      name: "Pant",
      id: 2,
      price: 250,
      size: ProductSize.Medium,
      description: "Crafted from a luxuriously soft fabric, these sweatpants combine comfort with artisan hand-stitching for a truly unique look. The modern fit and meticulous detailing, including bold hand-stitched lettering, make these sweatpants perfect for both relaxed wear and making a stylish statement. Whether lounging or out and about, experience unparalleled comfort with a touch of craftsmanship.",
      mainImage: "/FPant-F.webp",
      detailImages: ["/FPant-B.webp", "/Pant-Detail.webp"],
    },
    "sl-pant": {
      name: "Wide Pant",
      id: 3,
      price: 250,
      size: ProductSize.Medium,
      description: "Made from a premium, ultra-soft fabric, these wide-leg sweatpants offer a perfect blend of comfort and modern style. Featuring bold hand-stitched detailing, these sweatpants are designed with a relaxed wide-leg fit for a flattering silhouette. The craftsmanship and attention to detail elevate this casual essential, providing ease of movement and a refined look for both lounging and stepping out in style.",
      mainImage: "/SL-Pant-F.webp",
      detailImages: ["/SL-Pant-B.webp", "/Pant-Detail.webp"],
    },
  };
  