import { ProductCard } from "@/components/ProductCard";
import connectDB from "@/database/dbConnect";
import Product from "@/database/models/Product";
import Link from "next/link";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  const category = params.category;
  console.log("Category from searchParams:", category);
  await connectDB();

  const products = category
    ? await Product.find({ category }).lean()
    : await Product.find().lean();

  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product._id.toString()} product={product} />
      ))}
    </div>
  );
}
