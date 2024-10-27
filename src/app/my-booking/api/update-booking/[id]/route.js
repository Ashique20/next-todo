import { connectDB } from "@/app/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const PATCH = async (request, { params }) => {
    const db = await connectDB();
    const bookingCollection = db.collection("fruits");
    const updateDoc = await request.json();
    try {
      const resp = await bookingCollection.updateOne(
        { _id: new ObjectId(params.id) },
        {
          $set: {
            ...updateDoc,
          },
        },
        {
          upsert: true,
        }
      );
      return NextResponse.json({
        message: "updated the booking",
        response: resp,
      });
    } catch (error) {
      return NextResponse.json({ message: "Something Went Wrong" });
    }
  };