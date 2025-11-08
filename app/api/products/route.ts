import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/database/dbConnect";
import Product from "@/database/models/Product";

export async function GET() {
  await dbConnect();
  const products = await Product.find({});
  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const data = await req.json();

    // console.log("data is :", data);

    // Add input validation here (or use a library like Zod/Joi)
    if (!data.name || !data.price) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 422 }
      );
    }

    const product = new Product(data);
    await product.save();

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.log("Error in creating product :", error.message);
    return NextResponse.json(
      {
        message: "Error in creating product",
        error: error instanceof Error ? error.message : "Unknow",
      },
      { status: 500 }
    );
  }
}
