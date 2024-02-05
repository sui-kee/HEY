import WhatsNew from "@/components/home/coverImage";
import BestOffers from "@/components/home/bestOffers";

export default function Page() {
  return (
    <main className=" flex flex-row justify-start flex-wrap items-center p-3 ">
      <WhatsNew />
      <BestOffers />
    </main>
  );
}
