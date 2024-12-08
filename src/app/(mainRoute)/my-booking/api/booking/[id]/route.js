import {connectDB} from "@/lib/connectDB";
import {ObjectId} from "mongodb";
import {NextResponse} from "next/server";

export const DELETE = async (request, {params}) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const res = await bookingsCollection.deleteOne({
      _id: new ObjectId(params.id),
    });
    return NextResponse.json({message: "Deleted the booking", response: res});
  } catch (error) {
    return NextResponse.json({message: "Something Went Wrong"});
  }
};
