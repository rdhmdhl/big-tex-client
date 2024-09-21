import { Product, ProductSize } from '@/types/Product';

export const productData: Record<string, Product> = {
    hoodie: {
      name: "Hoodie",
      id: 1,
      price: 250,
      size: ProductSize.Medium,
      description:
        "Features a premium, soft-touch fabric that provides unparalleled comfort and sophistication. Designed with a modern fit and refined detailing, it's perfect for elevating everyday casual wear.",
      mainImage: "/Hoodie-F-Resized.webp",
      detailImages: ["/Hoodie-B.webp", "/Hoodie-Detail.webp"],
    },
    pant: {
      name: "Pants",
      id: 2,
      price: 250,
      size: ProductSize.Medium,
      description: "Description of Product 2",
      mainImage: "/FPant-F.webp",
      detailImages: ["/Hoodie-B.webp", "/Hoodie-Detail.webp"],
    },
    "sl-pant": {
      name: "SL Pants",
      id: 3,
      price: 250,
      size: ProductSize.Medium,
      description: "Description of Product 3",
      mainImage: "/SLPant-F.webp",
      detailImages: ["/Hoodie-B.webp", "/Hoodie-Detail.webp"],
    },
  };
  