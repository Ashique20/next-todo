import Navbar from "@/Components/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

const Home = async () => {
  const session = await getServerSession(authOptions); // Await here
  console.log({ session }, 'ok');

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

       
        {session ? (
          <p>Welcome, {session.user?.email}</p> // Display user email if available
        ) : (
          <p>Not signed in</p>
        )}
      </main>
    </div>
  );
};

export default Home;
