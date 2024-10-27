
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



// import { connectDB } from "@/app/lib/connectDB";
// import NextAuth from "next-auth";
// import CredentialsProvider from 'next-auth/providers/credentials';

// const handler = NextAuth({
//     secret: "AkBztOuqPnIoGgnC/Y9/V2g3pxBUuKAe0Y6W+qWOWUM=",
//     session: {
//         strategy: 'jwt',
//         maxAge:30 * 24 * 60 *60,
//     },
//     providers: [
//         CredentialsProvider({
//             credentials: {
//                 email:{},
//                 password:{}
//             },
//             async authorize(credentials) {
             
//                 const {email,password} = credentials;

//                 if (!email||!password) {
//                     return null;
//                 }
//                 const db =connectDB()
//                 const currentUser = await db.collection('users').findOne({email})
//                 if(!currentUser){
//                     return null
//                 }

//                 const passwordMatched = 

//                 // if(email){
//                 //     const currentUser = users.find((user)=>user.email===email)
//                 //         if(currentUser){
//                 //             if(currentUser.password===password){
//                 //                 return currentUser
//                 //             }
//                 //         }
//                 //         return null
//                 // }

          
//             }
//         })
//     ],
//     callbacks:{},
//     pages:{
//         signIn:"/login",
        
//     }
// } );

// // const users = [
// //     {
// //         id:1,
// //         name:"Mehtaab",
// //         email:'mahtaab@gmail.com',
// //         password:'123456'

// //     },
// //     {
// //         id:2,
// //         name:"Ashiq",
// //         email:'ash@gmail.com',
// //         password:'123456'

// //     },
// //     {
// //         id:3,
// //         name:"ayan",
// //         email:'ayan@gmail.com',
// //         password:'123456'

// //     },
// // ]

// export { handler as GET, handler as POST };

