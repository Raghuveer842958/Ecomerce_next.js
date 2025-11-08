import dbConnect from "@/database/dbConnect";
import Product from "@/database/models/Product";
import React from "react";
import { ProductCard } from "@/components/ProductCard"; // adjust this import path if needed

const RecommendedProduct = async ({ category }: { category: string }) => {
  if (!category) {
    return <div className="text-gray-400">No category specified.</div>;
  }

  await dbConnect();
  const productList = await Product.find({ category }).lean();

  if (!productList.length) {
    return (
      <div className="text-gray-400">
        No recommended products in "{category}".
      </div>
    );
  }

  return (
    <main>
      <h1 className="text-3xl mt-4 font-semibold mb-5">Recommended Products: {category}</h1>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productList.map((product) => (
            <ProductCard
              key={product._id.toString()}
              product={{
                _id: product._id?.toString?.() || "",
                name: product.name,
                category: product.category,
                price: product.price,
                descriptions: product.descriptions,
                images: product.images,
                stockQuantity: product.stockQuantity,
                status: product.status,
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default RecommendedProduct;

