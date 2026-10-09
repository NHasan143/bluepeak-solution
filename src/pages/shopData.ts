export const SHOP_FILTERS = [
  { key: "all", label: "All" },
  { key: "dairy", label: "Cyber" },
  { key: "pantry", label: "Digital" },
  { key: "meat", label: "Software" },
  { key: "fruit", label: "Technology" },
  { key: "vagetables", label: "Development" },
];

export type Product = {
  name: string;
  price: string;
  tags: string[];
};

export const PRODUCTS: Product[] = [
  { name: "Show Piece", price: "$32.00", tags: ["pantry", "fruit"] },
  { name: "Leather Belt", price: "$52.00", tags: ["dairy", "meat", "fruit"] },
  { name: "Sunglasses", price: "$42.00", tags: ["pantry", "fruit", "vagetables"] },
  { name: "Backpack", price: "$22.00", tags: ["dairy", "meat", "vagetables"] },
  { name: "Hand Watch", price: "$34.00", tags: ["pantry", "meat", "fruit"] },
  { name: "Party Bag", price: "$25.00", tags: ["dairy", "pantry"] },
  { name: "Coffee Mug", price: "$20.00", tags: ["fruit", "vagetables"] },
  { name: "Smart Watch", price: "$40.00", tags: ["dairy", "pantry", "meat", "vagetables"] },
];
