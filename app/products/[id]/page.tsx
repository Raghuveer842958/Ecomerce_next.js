import dbConnect from "@/database/dbConnect";
import Product from "@/database/models/Product";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart, Heart, CreditCard } from "lucide-react";
import ProductDetails from "@/components/ProductDetails";
import RecomendedProdcut from "@/components/RecomendedProdcut";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!id) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        ID is not defined
      </div>
    );
  }

  await dbConnect();
  const product = await Product.findById(id).lean();
  if (!product) {
    return (
      <div className="flex items-center justify-center text-gray-400">
        Product not found.
      </div>
    );
  }

  return (
    <section className="h-auto w-auto m-10 mt-4 bg-black flex-col items-center justify-center px-0 overflow-hidden">
      <ProductDetails product={product} />
      <RecomendedProdcut category={product?.category} />
    </section>
  );
}
