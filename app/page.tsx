import DarkScreen from "@/components/dispaly/darkScreen";
import IntroImage from "@/components/dispaly/introImage";
import Tour from "@/components/dispaly/tour";

export default function Home() {
  return (
    <main className=" w-full h-full flex flex-col justify-center items-center ">
      <IntroImage />
      <Tour />
      <DarkScreen />
    </main>
  );
}
