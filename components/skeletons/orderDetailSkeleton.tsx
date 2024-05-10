import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export default function OrderDetailSkeleton() {
  return (
    <>
      <Card>
        <CardHeader>
          {/* Skeleton for DeleteOrder */}
          <div className="w-12 h-12 bg-gray-200 animate-pulse rounded-full"></div>
          <div className="ml-2">
            {/* Skeleton for Order Title */}
            <div className="w-20 h-4 bg-gray-200 animate-pulse"></div>
            {/* Skeleton for Order Description */}
            <div className="w-40 h-3 bg-gray-200 animate-pulse mt-1"></div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-1 text-sm">
            {/* Skeleton for View details link */}
            <div className="w-24 h-4 bg-gray-200 animate-pulse"></div>
            {/* Skeleton for Ships from */}
            <div className="w-32 h-3 bg-gray-200 animate-pulse"></div>
            {/* Skeleton for Tracking number */}
            <div className="w-40 h-3 bg-gray-200 animate-pulse"></div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          {/* Skeleton for Decline Button */}
          <div className="w-20 h-8 bg-gray-200 animate-pulse"></div>
          {/* Skeleton for Finished Button */}
          <div className="w-20 h-8 bg-gray-200 animate-pulse"></div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          {/* Skeleton for Contact Title */}
          <div className="w-32 h-4 bg-gray-200 animate-pulse"></div>
        </CardHeader>
        <CardContent className="text-sm">
          <div className="grid gap-1">
            {/* Skeleton for Email Link */}
            <div className="w-32 h-4 bg-gray-200 animate-pulse"></div>
            {/* Skeleton for Phone Number */}
            <div className="w-20 h-3 bg-gray-200 animate-pulse"></div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          {/* Skeleton for Order Time Title */}
          <div className="w-24 h-4 bg-gray-200 animate-pulse"></div>
        </CardHeader>
        <CardContent className="text-sm">
          {/* Skeleton for Order Time */}
          <div className="w-32 h-3 bg-gray-200 animate-pulse"></div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          {/* Skeleton for Total Amount Title */}
          <div className="w-32 h-4 bg-gray-200 animate-pulse"></div>
        </CardHeader>
        <CardContent className="text-sm">
          {/* Skeleton for Total Amount */}
          <div className="w-20 h-3 bg-gray-200 animate-pulse"></div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          {/* Skeleton for Status Title */}
          <div className="w-20 h-4 bg-gray-200 animate-pulse"></div>
        </CardHeader>
        <CardContent className="text-sm">
          {/* Skeleton for Order Status */}
          <div className="w-20 h-3 bg-gray-200 animate-pulse"></div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          {/* Skeleton for Products Title */}
          <div className="w-28 h-4 bg-gray-200 animate-pulse"></div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Skeleton for each product */}
            {[1, 2, 3].map((_, index) => (
              <div key={index}>
                {/* Skeleton for Product Image */}
                <div className="w-full h-52 bg-gray-200 animate-pulse rounded-md"></div>
                <div className="grid gap-1 text-sm">
                  {/* Skeleton for Product Name */}
                  <div className="w-32 h-4 bg-gray-200 animate-pulse"></div>
                  {/* Skeleton for Product Price */}
                  <div className="w-20 h-3 bg-gray-200 animate-pulse"></div>
                  {/* Skeleton for Product Quantity */}
                  <div className="w-20 h-3 bg-gray-200 animate-pulse"></div>
                  {/* Skeleton for Product Total */}
                  <div className="w-20 h-3 bg-gray-200 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
