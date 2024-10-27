"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
    const { data: session } = useSession();

    return (
        <div>
            <nav className="bg-blue-400 px-6 py-4 flex justify-between bg-blue-400 border-2">
                <h6>Todo</h6>
            </nav>
            <ul>
                {
                    !session ? (
                        <Link href='/login' className="btn btn-primary">Login</Link>
                    ) : (
                        <button onClick={() => signOut()} className="btn btn-primary">LogOut</button>
                    )
                }
            </ul>
        </div>
    );
}

export default Navbar;
