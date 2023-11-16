import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/app/models/user.model";
import { connectToDB } from "@/app/lib/db";

connectToDB();

// Mock Authentication using encrypted password stored in database
export const POST = async (req: NextRequest) => {
  try {
    const { username, password } = await req.json();
    // check if username exists
    const user = await User.findOne({ username });
    if (user) {
      return NextResponse.json(
        { message: "Username already exists" },
        { status: 400 }
      );
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // create new user
    const newUser = new User({
      username,
      password: hashedPassword,
    });
    // save user
    const savedUser = await newUser.save();
    return NextResponse.json(
      {
        message: "User created",
        success: true,
        data: savedUser,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
