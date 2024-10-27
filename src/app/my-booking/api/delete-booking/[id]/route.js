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

// /app/api/my-booking/delete-booking/[id]/route.js

// import { connectDB } from "@/lib/connectDB";
// import { ObjectId } from "mongodb";
// import { NextResponse } from "next/server";

// export const DELETE = async (request, { params }) => {
//   const db = await connectDB();
//   const bookingCollection = db.collection("fruits");

//   try {
//     const result = await bookingCollection.deleteOne({ _id: new ObjectId(params.id) });
//     return NextResponse.json({
//       message: "Deleted the booking",
//       response: result, // Make sure to pass the actual delete result here
//     });
//   } catch (error) {
//     console.error("Error deleting booking:", error);
//     return NextResponse.json({ message: "Something went wrong" });
//   }
// };
