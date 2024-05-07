import { Spin } from "antd";

export default function SpinLoading({
  loadingText = "loading",
}: {
  loadingText?: string;
}) {
  return (
    <div className=" fixed top-0 left-0 z-[1000] gap-2 w-full h-full bg-[rgba(0,0,0,0.5)] flex flex-col justify-center items-center">
      <Spin tip="loading" size="large" />
      <div className="text-white text-xl">{loadingText}</div>
    </div>
  );
}
