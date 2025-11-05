import dbConnect from "@/database/dbConnect";
import User from "@/database/models/User";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    console.log("signup request received!!");
    await dbConnect();

    const { name, email, password } = await req.json();
    if (!name || !email || !password) {
      return NextResponse.json(
        {
          message: "Missing required fields",
        },
        { status: 422 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        {
          message: "User Allready Exist",
        },
        { status: 422 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    return NextResponse.json(
      {
        message: "User signup successfully!!",
      },
      { status: 201 }
    );
  } catch (error) {
    // console.log("Error in user singup :", error.message);
    return NextResponse.json({
      message: "Error in signup route",
      error: error instanceof Error ? error.message : "Unknow",
    });
  }
}
