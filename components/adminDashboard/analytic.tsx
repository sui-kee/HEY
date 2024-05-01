"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { FilledtimeseriesChart } from "./adminQuickShow";

export default function Analytic() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue</CardTitle>
        <CardDescription>Income over the last 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <FilledtimeseriesChart className="h-[300px] overflow-auto " />
      </CardContent>
      <footer className=" flex flex-col gap-3 justify-start">
        <div className=" flex justify-start gap-3 items-center">
          <div className=" min-w-[50px] min-h-[20px] bg-red-500"></div>
          <label>denied</label>
        </div>
        <div className=" flex justify-start gap-3 items-center">
          <div className=" min-w-[50px] min-h-[20px] bg-blue-500"></div>
          <label>success</label>
        </div>
      </footer>
    </Card>
  );
}
