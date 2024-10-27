import { connectDB } from "@/app/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const bookingCollection = db.collection("fruits");
  try {
    const resp = await bookingCollection.deleteOne({
      _id: new ObjectId(params.id),
    });
    return NextResponse.json({
      message: "deleted the booking",
      response: resp,
    });
  } catch (error) {
    return NextResponse.json({ message: "Something Went Wrong" });
  }
};

