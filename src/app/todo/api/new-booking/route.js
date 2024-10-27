import { connectDB } from "@/app/lib/connectDB";

export const POST = async (request) => {
  const newBooking = await request.json();
  const db = await connectDB();
  const dataCollection = db.collection("fruits");
  try {
    const res = await dataCollection.insertOne(newBooking);
    return new Response(JSON.stringify({ message: "Added Successfully" }), {
    
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Something Went Wrong" }), {
     
    });
  }
};