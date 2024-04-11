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
        <FilledtimeseriesChart className="h-[300px]" />
      </CardContent>
    </Card>
  );
}
