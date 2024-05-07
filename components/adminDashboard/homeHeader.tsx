import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { PackageIcon, ShoppingBagIcon, UsersIcon } from "./v0Icons";
import { DollarSignIcon } from "./v0dasboard";

export default function AdminHomeHeader() {
  return (
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
          <CardDescription>{`Today's income`}</CardDescription>
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
  );
}
