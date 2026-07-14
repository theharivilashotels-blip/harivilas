import suite1 from "../assets/suite-1.jpg";
import suite2 from "../assets/suite-2.jpg";

export type Room = {
  slug: string;
  name: string;
  price: number;
  desc: string;
  longDesc: string;
  images: string[];
  features: string[];
  size?: string;
  occupancy?: string;
};

export const rooms: Room[] = [
  {
    slug: "deluxe",
    name: "Deluxe Room",
    price: 1250,
    desc: "Warm, spacious and beautifully finished. The perfect everyday luxury for solo travellers and couples.",
    longDesc:
      "Our Deluxe Room blends comfort with warm heritage details — a plush king bed, generous work desk, high-speed Wi-Fi and a spotlessly clean, air-conditioned space. Ideal for business travellers and couples looking for space, quiet and thoughtful service.",
    images: [
      "https://i.ibb.co/DPFSDdBD/IMG-4544.jpg",
      "https://i.ibb.co/LXTZxnxL/IMG-4540.jpg",
    ],
    features: ["King bed", "Air Conditioning", "Free Wi-Fi", "24×7 room service", "LED TV", "Attached bathroom"],
    size: "260 sq. ft.",
    occupancy: "2 Adults",
  },
  {
    slug: "premium",
    name: "Standard Room",
    price: 1550,
    desc: "Upgraded comfort, elegant décor and thoughtful touches for a truly restful stay.",
    longDesc:
      "The Standard Room steps things up with premium bedding, elegant décor and a dedicated work desk. Enjoy complimentary breakfast, high-speed Wi-Fi and 24×7 room service in a beautifully finished, air-conditioned space.",
    images: [
      "https://i.ibb.co/MxFPdDD8/IMG-4535.jpg",
      "https://i.ibb.co/kVhD79bb/IMG-4536.jpg",
      "https://i.ibb.co/tGsjkNH/IMG-4598.jpg",
    ],
    features: ["Premium bedding", "Work desk", "Complimentary breakfast", "Free Wi-Fi", "Air Conditioning", "LED TV"],
    size: "300 sq. ft.",
    occupancy: "2 Adults",
  },
  {
    slug: "suite",
    name: "Suite Room",
    price: 3150,
    desc: "Our most spacious room — a private living area, king bed and premium amenities. Ideal for couples and special occasions.",
    longDesc:
      "The Suite is our signature space — a private living area, a plush king bed and premium amenities designed for slow mornings and long stays. Perfect for honeymoons, anniversaries and couples who deserve a little more room to celebrate.",
    images: [suite1, suite2],
    features: ["Separate living area", "King bed", "Couple friendly", "Late checkout", "Premium toiletries", "Mini fridge"],
    size: "480 sq. ft.",
    occupancy: "2 Adults + 1 Child",
  },
  {
    slug: "standard",
    name: "Premium Room",
    price: 1150,
    desc: "Clean, comfortable and value-for-money. Everything you need for a great night's sleep.",
    longDesc:
      "The Premium Room is our smart, affordable choice — spotlessly clean, air-conditioned and thoughtfully equipped with a queen bed, LED TV and high-speed Wi-Fi. Everything you need for a great night's sleep at a wonderful price.",
    images: [
      "https://i.ibb.co/dsW6qzhk/IMG-4594.jpg",
      "https://i.ibb.co/sJMQ7rpz/IMG-4595.jpg",
    ],
    features: ["Queen bed", "Air Conditioning", "Free Wi-Fi", "LED TV", "Attached bathroom", "24×7 room service"],
    size: "220 sq. ft.",
    occupancy: "2 Adults",
  },
];

export function findRoom(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug);
}
