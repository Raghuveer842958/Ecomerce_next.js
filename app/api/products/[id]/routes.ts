import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/database/dbConnect";
import Product from "@/database/models/Product";
import { ObjectId } from "mongodb";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  if (!ObjectId.isValid(params.id))
    return NextResponse.json({ message: "Invalid ID" }, { status: 400 });

  const product = await Product.findById(params.id);
  if (!product)
    return NextResponse.json({ message: "Product not found" }, { status: 404 });

  return NextResponse.json(product);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  if (!ObjectId.isValid(params.id))
    return NextResponse.json({ message: "Invalid ID" }, { status: 400 });

  const updates = await req.json();
  const product = await Product.findByIdAndUpdate(params.id, updates, {
    new: true,
  });
  if (!product)
    return NextResponse.json({ message: "Product not found" }, { status: 404 });

  return NextResponse.json(product);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  if (!ObjectId.isValid(params.id))
    return NextResponse.json({ message: "Invalid ID" }, { status: 400 });

  const product = await Product.findByIdAndDelete(params.id);
  if (!product)
    return NextResponse.json({ message: "Product not found" }, { status: 404 });

  return NextResponse.json({ message: "Product deleted successfully" });
}
