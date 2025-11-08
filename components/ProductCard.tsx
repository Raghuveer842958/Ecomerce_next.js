"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import Link from "next/link";

export interface ProductProps {
  name: string;
  category?: string;
  price: number;
  descriptions?: string;
  images?: string[];
  stockQuantity?: number;
  status?: "active" | "discontinued";
  _id?: string;
}

export function ProductCard({ product }: { product: ProductProps }) {
  console.log("product id in product card:", product);

  const defaultImage =
    "https://hips.hearstapps.com/hmg-prod/images/nbd-just-the-ultimate-list-of-80-amazon-must-haves-to-shop-asap-66902d51b3786.jpg?crop=0.505xw:1.00xh;0.194xw,0&resize=640:*";
  const imageSrc = product.images?.[0] || defaultImage;

  return (
    <Link href={`/products/${product?._id}`}>
      <Card className="w-full max-w-sm rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <img
            src={imageSrc}
            alt={product.name}
            className="w-full h-44 object-cover"
            loading="lazy"
          />
        </CardHeader>
        <CardContent className="px-5 py-4">
          <CardTitle
            className="text-lg font-semibold truncate"
            title={product.name}
          >
            {product.name}
          </CardTitle>
          <CardDescription className="text-gray-600 text-sm line-clamp-3">
            {product.descriptions || "No description available."}
          </CardDescription>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-indigo-600 font-bold text-lg">
              ₹ {product.price}
            </span>
            <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
              {product.status === "active" ? "In Stock" : "Discontinued"}
            </div>
          </div>
          {product.stockQuantity !== undefined && (
            <p className="text-xs text-gray-500 mt-1">
              Stock: {product.stockQuantity}
            </p>
          )}
          <div className="flex items-center mt-3 space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                key={star}
                className={`h-4 w-4 ${
                  star <= 4 ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-xs text-gray-400">(4.0)</span>
          </div>
        </CardContent>
        <CardFooter className="px-5 py-3 bg-gray-50 rounded-b-lg">
          <button
            onClick={() => console.log("add to cart called!!")}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2 rounded-md transition"
          >
            Add to Cart
          </button>
        </CardFooter>
      </Card>
    </Link>
  );
}
