import dbConnect from "@/database/dbConnect";
import Product from "@/database/models/Product";
import Link from "next/link";

export default async function HomePage() {
  await dbConnect();
  const categories = await Product.distinct("category");
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-indigo-50">
        <div className="absolute inset-0 z-0">
          {/* Background image or gradient */}
        </div>
        <div className="z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
            Welcome to Ecomerce
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Shop the best products for home & lifestyle
          </p>
          <Link
            href="/products"
            className="bg-indigo-600 text-white px-6 py-3 rounded shadow hover:bg-indigo-700 font-semibold transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-8 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/products?category=${encodeURIComponent(category)}`}
            className="block bg-white rounded shadow p-6 text-center hover:bg-indigo-50 transition"
          >
            <span className="text-xl font-bold text-indigo-600">{category}</span>
          </Link>
        ))}
      </div>
    </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        {/* ProductGrid component */}
      </section>

      {/* Promotions or Category Highlights */}
      <section className="bg-gray-50 p-6">
        <h2 className="text-xl font-semibold mb-4">Shop by Category</h2>
        {/* CategoryGrid or ImageTiles */}
      </section>

      {/* Testimonials/Reviews */}
      <section className="max-w-7xl mx-auto p-8">
        {/* Testimonials or review carousel */}
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-6 mt-10 text-center text-gray-500 text-sm">
        © 2025 Ecomerce. All rights reserved.
      </footer>
    </main>
  );
}
