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
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <ShoppingCartIcon className="h-4 w-4" />
                Orders
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <PackageIcon className="h-4 w-4" />
                Products
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <UsersIcon className="h-4 w-4" />
                Customers
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <LineChartIcon className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search products..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Orders</CardTitle>
                <CardDescription>New orders today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2">
                  <ShoppingBagIcon className="h-6 w-6" />
                  <h2 className="font-semibold text-2xl">32</h2>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
                <CardDescription>Today's income</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2">
                  <DollarSignIcon className="h-6 w-6" />
                  <h2 className="font-semibold text-2xl">$2,250</h2>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Products</CardTitle>
                <CardDescription>Items in stock</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2">
                  <PackageIcon className="h-6 w-6" />
                  <h2 className="font-semibold text-2xl">120</h2>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customers</CardTitle>
                <CardDescription>Total clients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2">
                  <UsersIcon className="h-6 w-6" />
                  <h2 className="font-semibold text-2xl">450</h2>
                </div>
              </CardContent>
            </Card>
          </div>
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

export function BellIcon(props: any) {
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

export function DollarSignIcon(props: any) {
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

function FilledtimeseriesChart(props: any) {
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

function HomeIcon(props: any) {
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

function LineChartIcon(props: any) {
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
