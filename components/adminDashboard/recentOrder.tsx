"use client";
import { Badge } from "@/components/ui/badge";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import AdminOrderBox from "./adminOrderBox";
export default function RecentOrder() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
        <CardDescription>Latest customer transactions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="border-t pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <AdminOrderBox />
            <AdminOrderBox />
            <AdminOrderBox />
            <AdminOrderBox />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
