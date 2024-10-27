
import { connectDB } from "@/app/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
    secret:  process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const { email, password } = credentials;

                if (!email || !password) {
                    return null;
                }

                try {
                    const db = await connectDB();
                    const currentUser = await db.collection('users').findOne({ email });

                    if (!currentUser || currentUser.password !== password) {
                        return null;  // Either user doesn't exist or password does not match
                    }

                    // Return user object if authentication succeeds
                    return { id: currentUser._id, name: currentUser.name, email: currentUser.email };
                } catch (error) {
                    console.error("Database error:", error);
                    return null;
                }
            }
        })
    ],
    callbacks: {},
    pages: {
        signIn: "/login",
    }
});

export { handler as GET, handler as POST };



