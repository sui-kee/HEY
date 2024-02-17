import FashionImgDisplay from "@/components/fashions/fashionDisplay";

export default function Page() {
  return (
    <main className=" flex flex-col justify-start items-start">
      <nav className=" p-2 flex justify-between w-full">
        <h1 className=" text-4xl font-bold text-white ">Fashions</h1>
        <ul className=" px-3 flex justify-end gap-7 text-xl items-center text-white w-fit ">
          <li>Favourites</li>
          <li>Trendings</li>
        </ul>
      </nav>
      <FashionImgDisplay />
    </main>
  );
}
