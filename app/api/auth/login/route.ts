import dbConnect from "@/database/dbConnect";
import User from "@/database/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

export async function POST(req: NextRequest) {
  try {
    console.log("login api called!!");
    await dbConnect();

    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        {
          message: "Email and Password Missing",
        },
        { status: 422 }
      );
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          message: "User not Found",
        },
        { status: 401 }
      );
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        {
          message: "Invalid Password",
        },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return NextResponse.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error in login route",
        error: error instanceof Error ? error.message : "Unknow",
      },
      { status: 500 }
    );
  }
}
