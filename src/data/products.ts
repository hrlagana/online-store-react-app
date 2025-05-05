import { Product } from "@/features/typings";

export const products: Product[] = [
    {
      id: "1",
      title: "Pacific Halibut",
      description: "Everyone’s favorite white fish. We will cut it to the size you need and ship it.",
      image: "https://plus.unsplash.com/premium_photo-1701015785530-778f0680e132?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBmaXNofGVufDB8fDB8fHww",
      price: 17.99,
      status: "available",
    },
    {
      id: "2",
      title: "Lobster",
      description: "These tender, mouth-watering beauties are a fantastic hit at any dinner party.",
      image: "https://images.unsplash.com/photo-1590759668628-05b0fc34bb70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fExvYnN0ZXJ8ZW58MHx8MHx8fDA%3D",
      price: 32.99,
      status: "available",
    },
    {
      id: "3",
      title: "Sea Scallops",
      description: "Big, sweet and tender. True dry-pack scallops from the icy waters of Alaska.",
      image: "https://images.unsplash.com/photo-1655920752017-5c88ff8fd829?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2VhJTIwU2NhbGxvcHN8ZW58MHx8MHx8fDA%3D",
      price: 16.98,
      status: "unavailable",
    },
    {
      id: "4",
      title: "Mahi Mahi",
      description: "Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes.",
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
      price: 11.29,
      status: "available",
    },
  ];