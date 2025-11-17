// src/data/destinations.ts
export type Destination = {
  id: number;
  name: string;
  country: string;
  visited: boolean;
  image: string; // path under /public/images
  description?: string;
};

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    visited: false,
    image: "/images/paris.jpg",
    description: "City of light and cafés.",
  },
  {
    id: 2,
    name: "Tokyo",
    country: "Japan",
    visited: false,
    image: "/images/tokyo.jpg",
    description: "Vibrant city, great food.",
  },
  {
    id: 3,
    name: "Lisbon",
    country: "Portugal",
    visited: true,
    image: "/images/lisbon.jpg",
    description: "Coastal charm and tiles.",
  },
];
