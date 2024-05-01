/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jedNLb3iC7Z
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { ResponsiveLine } from "@nivo/line";
import {
  Package2Icon,
  PackageIcon,
  SearchIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "./v0Icons";

export default function V0admin() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Latest customer transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-t pt-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-start gap-4">
                      <img
                        alt="Avatar"
                        className="rounded-full overflow-hidden border"
                        height="48"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "48/48",
                          objectFit: "cover",
                        }}
                        width="48"
                      />
                      <div className="flex-1 grid gap-1.5">
                        <h3 className="font-semibold text-sm">
                          Olivia Martin
                          <Badge className="ml-1.5 inline shrink-0">
                            Premium
                          </Badge>
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          #3210
                          <br />
                          Shipped
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">$42.25</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          2 items
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <img
                        alt="Avatar"
                        className="rounded-full overflow-hidden border"
                        height="48"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "48/48",
                          objectFit: "cover",
                        }}
                        width="48"
                      />
                      <div className="flex-1 grid gap-1.5">
                        <h3 className="font-semibold text-sm">
                          Ava Johnson
                          <Badge className="ml-1.5 inline shrink-0">Gold</Badge>
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          #3209
                          <br />
                          Paid
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">$74.99</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          1 items
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <img
                        alt="Avatar"
                        className="rounded-full overflow-hidden border"
                        height="48"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "48/48",
                          objectFit: "cover",
                        }}
                        width="48"
                      />
                      <div className="flex-1 grid gap-1.5">
                        <h3 className="font-semibold text-sm">
                          Lisa Anderson
                          <Badge className="ml-1.5 inline shrink-0">
                            Silver
                          </Badge>
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          #3203
                          <br />
                          Shipped
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">$34.50</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          1 items
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <img
                        alt="Avatar"
                        className="rounded-full overflow-hidden border"
                        height="48"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "48/48",
                          objectFit: "cover",
                        }}
                        width="48"
                      />
                      <div className="flex-1 grid gap-1.5">
                        <h3 className="font-semibold text-sm">
                          Sophia Anderson
                          <Badge className="ml-1.5 inline shrink-0">
                            Premium
                          </Badge>
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          #3207
                          <br />
                          Paid
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">$99.99</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          1 items
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
                <CardDescription>Income over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <FilledtimeseriesChart className="h-[300px]" />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

function BellIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function DollarSignIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

export function FilledtimeseriesChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
              { x: "July", y: 70 },
              { x: "August", y: 100 },
              { x: "September", y: 104 },
              { x: "October", y: 110 },
              { x: "November", y: 50 },
              { x: "December", y: 54 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
              { x: "July", y: 54 },
              { x: "August", y: 67 },
              { x: "September", y: 45 },
              { x: "October", y: 88 },
              { x: "November", y: 70 },
              { x: "December", y: 66 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        curve="monotoneX"
        enableArea={true}
        gridYValues={6}
        defs={[
          {
            id: "line-chart-gradient",
            type: "linearGradient",
            colors: [
              { offset: 0, color: "inherit" },
              { offset: 200, color: "inherit", opacity: 0 },
            ],
          },
        ]}
        fill={[{ match: "*", id: "line-chart-gradient" }]}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

export function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

export function LineChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}
