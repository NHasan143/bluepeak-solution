export const SHOP_FILTERS = [
  { key: "all", label: "All" },
  { key: "dairy", label: "Cyber" },
  { key: "pantry", label: "Digital" },
  { key: "meat", label: "Software" },
  { key: "fruit", label: "Technology" },
  { key: "vagetables", label: "Development" },
];

export type Product = {
  img: string;
  name: string;
  price: string;
  tags: string[];
};

export const PRODUCTS: Product[] = [
  { img: "1.jpg", name: "Show Piece", price: "$32.00", tags: ["pantry", "fruit"] },
  { img: "2.jpg", name: "Leather Belt", price: "$52.00", tags: ["dairy", "meat", "fruit"] },
  { img: "3.jpg", name: "Sunglasses", price: "$42.00", tags: ["pantry", "fruit", "vagetables"] },
  { img: "4.jpg", name: "Backpack", price: "$22.00", tags: ["dairy", "meat", "vagetables"] },
  { img: "5.jpg", name: "Hand Watch", price: "$34.00", tags: ["pantry", "meat", "fruit"] },
  { img: "6.jpg", name: "Party Bag", price: "$25.00", tags: ["dairy", "pantry"] },
  { img: "7.jpg", name: "Coffee Mug", price: "$20.00", tags: ["fruit", "vagetables"] },
  { img: "8.jpg", name: "Smart Watch", price: "$40.00", tags: ["dairy", "pantry", "meat", "vagetables"] },
];
