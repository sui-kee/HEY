import Analytic from "@/components/adminDashboard/analytic";
import AdminHomeHeader from "@/components/adminDashboard/homeHeader";
import RecentOrder from "@/components/adminDashboard/recentOrder";

export default function Admin() {
  return (
    <>
      <div className=" w-full gap-4 flex flex-col ">
        <AdminHomeHeader />
        <RecentOrder />
        <Analytic />
      </div>
    </>
  );
}
