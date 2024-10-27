

"use client";

// import { useSession } from "next-auth/react";
// import { useEffect, useState } from "react";

// const TodoForm = () => {
//   const [fruits, setFruits] = useState([]);
//   const { data: session } = useSession();

//   const loadData = async () => {
//     const resp = await fetch(`http://localhost:3000/my-booking/api/${session?.user?.email}`);
//     const data = await resp.json();
//     setFruits(data?.myBookings);
//   };

//   useEffect(() => {
//     if (session?.user?.email) loadData();
//   }, [session]);

//   const handleBooking = async (e) => {
//     e.preventDefault();
//     const bookInfo = {
//       email: session.user.email,
//       name: e.target.name.value,
//       price: e.target.price.value,
//     };

//     await fetch("http://localhost:3000/todo/api/new-booking", {
//       method: "POST",
//       body: JSON.stringify(bookInfo),
//       headers: { "content-type": "application/json" },
//     });
//     loadData(); // Refresh after adding a new booking
//   };

//   const handleDelete = async (id) => {
//     const response = await fetch(`http://localhost:3000/my-booking/api/delete-booking/${id}`, {
//       method: "DELETE",
//     });
//     const result = await response.json();

//     if (result?.response?.deletedCount > 0) {
//       setFruits((prevFruits) => prevFruits.filter((fruit) => fruit._id !== id));
//     } else {
//       console.error("Failed to delete booking");
//     }
//   };

//   return (
//     <div className="ml-[40%]">
//       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//         <form onSubmit={handleBooking} className="card-body">
//           <div className="form-control">
//             <label className="label"><span className="label-text">Fruit Name</span></label>
//             <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
//           </div>
//           <div className="form-control">
//             <label className="label"><span className="label-text">Price</span></label>
//             <input name="price" type="text" placeholder="Price" className="input input-bordered" required />
//           </div>
//           <div className="form-control mt-6">
//             <button className="btn btn-primary">Post</button>
//           </div>
//         </form>
//       </div>

//       <div className="mt-6">
//         <h2 className="text-xl font-semibold">My Bookings</h2>
//         {fruits.length > 0 ? (
//           <ul className="list-disc pl-5 space-y-2 mt-4">
//             {fruits.map((fruit) => (
//               <li key={fruit._id} className="text-white p-2 rounded-md shadow-sm">
//                 <p className="font-medium">{fruit.name}</p>
//                 <p>Price: ${fruit.price}</p>
//                 <div>
//                   <button onClick={() => handleDelete(fruit._id)} className="btn bg-red-400 text-white">Delete</button>
//                   <button className="btn bg-green-400 text-white ml-2">Update</button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="mt-4 text-gray-600">No fruits added yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TodoForm;

// import { useSession } from "next-auth/react";
// import { useEffect, useState } from "react";

// const TodoForm = () => {
//   const [fruits, setFruits] = useState([]);
//   const { data: session } = useSession();
//   const [editingFruit, setEditingFruit] = useState(null);

//   const loadData = async () => {
//     const resp = await fetch(`http://localhost:3000/my-booking/api/${session?.user?.email}`);
//     const data = await resp.json();
//     setFruits(data?.myBookings);
//   };

//   useEffect(() => {
//     if (session?.user?.email) loadData();
//   }, [session]);

//   const handleBooking = async (e) => {
//     e.preventDefault();
//     const bookInfo = {
//       email: session.user.email,
//       name: e.target.name.value,
//       price: e.target.price.value,
//     };
//     await fetch("http://localhost:3000/todo/api/new-booking", {
//       method: "POST",
//       body: JSON.stringify(bookInfo),
//       headers: { "content-type": "application/json" },
//     });
//     loadData();
//   };

//   const handleDelete = async (id) => {
//     const response = await fetch(`http://localhost:3000/my-booking/api/delete-booking/${id}`, {
//       method: "DELETE",
//     });
//     const result = await response.json();
//     if (result?.response?.deletedCount > 0) {
//       setFruits((prevFruits) => prevFruits.filter((fruit) => fruit._id !== id));
//     } else {
//       console.error("Failed to delete booking");
//     }
//   };

//   const handleUpdateClick = (fruit) => {
//     setEditingFruit(fruit);
//   };

//   const handleUpdateSubmit = async (e) => {
//     e.preventDefault();
//     const updatedInfo = {
//       name: e.target.name.value,
//       price: e.target.price.value,
//     };
//     const response = await fetch(`http://localhost:3000/my-booking/api/update-booking/${editingFruit._id}`, {
//       method: "PATCH",
//       body: JSON.stringify(updatedInfo),
//       headers: { "content-type": "application/json" },
//     });
//     const result = await response.json();
//     if (result?.response?.modifiedCount > 0) {
//       loadData();
//       setEditingFruit(null); // Close the update form
//     } else {
//       console.error("Failed to update booking");
//     }
//   };

//   return (
//     <div className="ml-[40%]">
//       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//         <form onSubmit={editingFruit ? handleUpdateSubmit : handleBooking} className="card-body">
//           <div className="form-control">
//             <label className="label"><span className="label-text">Fruit Name</span></label>
//             <input
//               name="name"
//               type="text"
//               placeholder="Name"
//               defaultValue={editingFruit?.name || ""}
//               className="input input-bordered"
//               required
//             />
//           </div>
//           <div className="form-control">
//             <label className="label"><span className="label-text">Price</span></label>
//             <input
//               name="price"
//               type="text"
//               placeholder="Price"
//               defaultValue={editingFruit?.price || ""}
//               className="input input-bordered"
//               required
//             />
//           </div>
//           <div className="form-control mt-6">
//             <button className="btn btn-primary">{editingFruit ? "Update" : "Post"}</button>
//           </div>
//         </form>
//       </div>

//       <div className="mt-6">
//         <h2 className="text-xl font-semibold">My Bookings</h2>
//         {fruits.length > 0 ? (
//           <ul className="list-disc pl-5 space-y-2 mt-4">
//             {fruits.map((fruit) => (
//               <li key={fruit._id} className="text-white p-2 rounded-md shadow-sm">
//                 <p className="font-medium">{fruit.name}</p>
//                 <p>Price: ${fruit.price}</p>
//                 <div>
//                   <button onClick={() => handleDelete(fruit._id)} className="btn bg-red-400 text-white">Delete</button>
//                   <button onClick={() => handleUpdateClick(fruit)} className="btn bg-green-400 text-white ml-2">Update</button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="mt-4 text-gray-600">No fruits added yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TodoForm;

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const TodoForm = () => {
  const [fruits, setFruits] = useState([]);
  const { data: session } = useSession();
  const [editingFruit, setEditingFruit] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const loadData = async () => {
    const resp = await fetch(`http://localhost:3000/my-booking/api/${session?.user?.email}`);
    const data = await resp.json();
    setFruits(data?.myBookings);
  };

  useEffect(() => {
    if (session?.user?.email) loadData();
  }, [session]);

  useEffect(() => {
    // Update input values when editingFruit changes
    if (editingFruit) {
      setName(editingFruit.name);
      setPrice(editingFruit.price);
    } else {
      setName("");
      setPrice("");
    }
  }, [editingFruit]);

  const handleBooking = async (e) => {
    e.preventDefault();
    const bookInfo = {
      email: session?.user?.email,
      name: e.target.name.value,
      price: e.target.price.value,
    };
    await fetch("http://localhost:3000/todo/api/new-booking", {
      method: "POST",
      body: JSON.stringify(bookInfo),
      headers: { "content-type": "application/json" },
    });
    loadData();
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:3000/my-booking/api/delete-booking/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    if (result?.response?.deletedCount > 0) {
      setFruits((prevFruits) => prevFruits.filter((fruit) => fruit._id !== id));
    } else {
      console.error("Failed to delete booking");
    }
  };

  const handleUpdateClick = (fruit) => {
    setEditingFruit(fruit);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const updatedInfo = {
      name,
      price,
    };
    const response = await fetch(`http://localhost:3000/my-booking/api/update-booking/${editingFruit._id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedInfo),
      headers: { "content-type": "application/json" },
    });
    const result = await response.json();
    if (result?.response?.modifiedCount > 0) {
      loadData();
      setEditingFruit(null); // Close the update form
    } else {
      console.error("Failed to update booking");
    }
  };

  return (
    <div className="ml-[40%]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={editingFruit ? handleUpdateSubmit : handleBooking} className="card-body">
          <div className="form-control">
            <label className="label"><span className="label-text">Fruit Name</span></label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text">Price</span></label>
            <input
              name="price"
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">{editingFruit ? "Update" : "Post"}</button>
          </div>
        </form>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">My Bookings</h2>
        {fruits.length > 0 ? (
          <ul className="list-disc pl-5 space-y-2 mt-4">
            {fruits.map((fruit) => (
              <li key={fruit._id} className="text-white p-2 rounded-md shadow-sm">
                <p className="font-medium">{fruit.name}</p>
                <p>Price: ${fruit.price}</p>
                <div>
                  <button onClick={() => handleDelete(fruit._id)} className="btn bg-red-400 text-white">Delete</button>
                  <button onClick={() => handleUpdateClick(fruit)} className="btn bg-green-400 text-white ml-2">Update</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-gray-600">No fruits added yet.</p>
        )}
      </div>
    </div>
  );
};

export default TodoForm;
