import ProductCard from "./productCard";
import ProductHeader from "./productHeader";

export default function BestOffers() {
  const dresses = [
    "/dresses/2.jpg",
    "/dresses/2.jpg",
    "/dresses/8.jpg",
    "/dresses/9.jpg",
    "/dresses/10.jpg",
  ];
  const sneakers = [
    "/sneakers/2.jpg",
    "/sneakers/2.jpg",
    "/sneakers/4.jpg",
    "/sneakers/5.jpg",
    "/sneakers/6.jpg",
  ];
  const hoodies = [
    "/hoodies/2.jpg",
    "/hoodies/2.jpg",
    "/hoodies/4.jpg",
    "/hoodies/5.jpg",
    "/hoodies/6.jpg",
  ];
  const bestOffers = [
    {
      name: "Special price dresses",
      percent: "20%",
      images: dresses,
      total: 20,
      left: 12,
    },
    {
      name: "Special price sneakers",
      percent: "10%",
      images: sneakers,
      total: 12,
      left: 9,
    },
    {
      name: "Special price hoodies",
      percent: "15%",
      images: hoodies,
      total: 15,
      left: 10,
    },
  ];
  return (
    <ProductHeader>
      {bestOffers.map((item, i) => (
        <ProductCard
          total={item.total}
          left={item.left}
          header={item.name}
          percent={item.percent}
          image={item.images}
          key={i}
        />
      ))}
    </ProductHeader>
  );
}
