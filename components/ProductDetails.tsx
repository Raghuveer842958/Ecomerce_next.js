import React from "react";
import { CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { CreditCard, Heart, ShoppingCart } from "lucide-react";

interface ProductDetails {
  name: string;
  category?: string;
  price: number;
  descriptions?: string;
  images?: string[];
  stockQuantity?: number;
  status?: "active" | "discontinued";
}

const ProductDetails = ({ product }: { product: ProductDetails }) => {
  const { name, price, category, status, descriptions, stockQuantity, images } =
    product;
  const defaultImage =
    "https://hips.hearstapps.com/hmg-prod/images/nbd-just-the-ultimate-list-of-80-amazon-must-haves-to-shop-asap-66902d51b3786.jpg?crop=0.505xw:1.00xh;0.194xw,0&resize=640:*";
  const imageSrc = images?.[0] || defaultImage;

  return (
    // <section className="h-screen w-full bg-black flex items-center justify-center px-0 overflow-hidden">
      <div className="flex flex-col md:flex-row w-full max-h-[70%] bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-800">
        {/* Image */}
        <div className="w-full md:w-1/2 h-64 md:h-full bg-gray-950 flex items-center justify-center">
          <img
            src={imageSrc}
            alt={name}
            className="object-cover w-full h-full max-h-[650px] rounded-none"
            loading="lazy"
          />
        </div>
        {/* Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-between py-8 px-6 md:px-10 bg-gray-900">
          <CardHeader className="mb-2">
            <CardTitle className="text-2xl md:text-3xl font-bold text-white mb-2">
              {name}
            </CardTitle>
            <p className="text-sm text-gray-400 mb-2">{category}</p>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-center">
            <p className="text-gray-300 mb-4">
              {descriptions || "No description available."}
            </p>
            <p className="text-xl font-semibold text-indigo-400 mb-2">
              ₹{price}
            </p>
            <div className="flex gap-6 text-sm mb-2">
              <span>
                <span className="opacity-70">Status:</span>{" "}
                <span
                  className={
                    status === "active" ? "text-green-400" : "text-red-400"
                  }
                >
                  {status}
                </span>
              </span>
              <span>
                <span className="opacity-70">Stock:</span>{" "}
                {stockQuantity ?? "N/A"}
              </span>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col md:flex-row gap-3 mt-6">
            <button
              className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 rounded-md py-3 text-white font-semibold transition"
              type="button"
            >
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </button>
            <button
              className="flex-1 flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 rounded-md py-3 text-white font-semibold transition"
              type="button"
            >
              <Heart className="w-5 h-5" /> Wishlist
            </button>
            <button
              className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 rounded-md py-3 text-white font-semibold transition"
              type="button"
            >
              <CreditCard className="w-5 h-5" /> Buy Now
            </button>
          </CardFooter>
        </div>
      </div>
    // </section>
  );
};

export default ProductDetails;
