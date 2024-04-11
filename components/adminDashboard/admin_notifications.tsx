export function NotiFication() {
  return (
    <>
      <main className=" flex flex-col justify-center p-2  m-2">
        <div className="  flex items-center justify-start pt-3 pb-3 pl-1">
          <span className=" mr-1 text-lg font-bold">Notifications</span>
          <div className="rounded-full bg-red-600 text-white">23</div>
        </div>
        {/* noti start here */}
        <NotiContainer />
        <NotiContainer />
        <NotiContainer />
        <NotiContainer />
        <NotiContainer />
        <NotiContainer />
      </main>
    </>
  );
}

function NotiContainer({ message, time }: { message?: string; time?: string }) {
  return (
    <div className="  grid grid-cols-2 mt-3 border-2 border-slate-300 p-2 rounded-md">
      <div className=" col-span-2 p-1 flex justify-evenly items-center">
        <img src="/myAvatar.svg" className="w-12 h-12 mr-2" />
        <span className=" text-slate-700">
          Kyaw Kyi want to join the server
        </span>
      </div>
      <div className=" flex justify-center">
        <button className=" rounded-md bg-blue-500 text-white hover:bg-blue-700 p-2 w-28">
          Accept
        </button>
      </div>
      <div className=" flex justify-center">
        <button className=" rounded-md shadow-md text-black hover:text-white hover:bg-red-500 p-2 w-28">
          Reject
        </button>
      </div>
      <span className=" col-span-2 text-sm text-slate-500">22 August 2023</span>
    </div>
  );
}
