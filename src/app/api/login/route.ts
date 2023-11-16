import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/app/models/user.model";
import { connectToDB } from "@/app/lib/db";
import jwt from "jsonwebtoken";

connectToDB();

// Mock Authentication using encrypted password stored in database
export const POST = async (req: NextRequest) => {
  try {
    const { username, password } = await req.json();
    // check if username exists
    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json(
        { message: "User does not exist, register to continue" },
        { status: 400 }
      );
    }
    // check if password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 400 }
      );
    }
    //get token
    const userData = {
      id: user._id,
      username: user.username,
    };
    const token = jwt.sign(userData, process.env.TOKEN_SECRET!, {
      expiresIn: "1h",
    });

    const response = NextResponse.json(
      {
        message: "Login successful",
        success: true,
        data: user,
      },
      { status: 201 }
    );
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
