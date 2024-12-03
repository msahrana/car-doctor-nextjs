import {connectDB} from "@/lib/connectDB";
import {NextResponse} from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const exist = await userCollection.findOne({email: newUser.email});
    console.log(exist);
    if (exist) {
      return NextResponse.json({message: "User Exists"}, {status: 304});
    }
    const salt = await bcrypt.genSalt(14);
    const hashedPassword = await bcrypt.hash(newUser.password, salt);
    const response = await userCollection.insertOne({
      ...newUser,
      password: hashedPassword,
    });
    return NextResponse.json({message: "User Created"}, {status: 200});
  } catch (error) {
    return NextResponse.json(
      {message: "Somethinh went wrong", error},
      {status: 500}
    );
  }
};
