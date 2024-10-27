// pages/api/signup.js
let users = [
    {
        id: 1,
        name: "Mehtaab",
        email: 'mahtaab@gmail.com',
        password: '123456'
    },
    {
        id: 2,
        name: "Ashiq",
        email: 'ash@gmail.com',
        password: '123456'
    },
    {
        id: 3,
        name: "Ayan",
        email: 'ayan@gmail.com',
        password: '123456'
    },
];

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { email, password, name } = req.body;

    // Check if the user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = { id: users.length + 1, name, email, password };
    users.push(newUser); // Temporary, replace with database in production

    // Return success response along with the updated user list
    return res.status(200).json({ 
        message: 'User created successfully', 
        user: newUser,
        users // Include the updated users array
    });
}
