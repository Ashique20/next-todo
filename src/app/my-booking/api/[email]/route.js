// import { connectDB } from "@/app/lib/connectDB";
// import { NextResponse } from "next/server";

// export const GET = async (request, { params }) => {
//   const db = await connectDB();
//   const bookingCollection = db.collection("fruits");
//   try {
//     const myBookings = await bookingCollection.find({ email: params.email }).toArray();
//     return NextResponse.json({ myBookings });
//   } catch (error) {
//     return NextResponse.json({ message: "No Data Found" });
//   }
// };

import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingCollection = db.collection("fruits");

  try {
    const myBookings = await bookingCollection.find({ email: params.email }).toArray();
    return NextResponse.json({ myBookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json({ message: "No Data Found" }, { status: 404 });
  }
};
