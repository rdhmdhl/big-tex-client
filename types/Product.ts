export enum ProductSize {
  Small = "S",
  Medium = "M",
  Large = "L",
  ExtraLarge = "XL",
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    size: ProductSize;
    mainImage: string;
    detailImages: Array<string>;
  }