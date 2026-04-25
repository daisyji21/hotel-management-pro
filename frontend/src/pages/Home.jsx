
// // // export default function Home(){
// // //   return <h1>Welcome to Hotel System</h1>;
// // // }
// // import { useState } from "react";

// // export default function Home() {
// //   const [location, setLocation] = useState("");

// //   return (
// //     <div className="bg-gray-100 min-h-screen">
      
// //       {/* 🔵 HEADER */}
// //       <div className="bg-blue-700 text-white p-4 flex justify-between items-center">
// //         <h1 className="text-2xl font-bold">HotelBook</h1>
// //         <div>
// //           <button className="mr-3">Login</button>
// //           <button className="bg-white text-blue-700 px-4 py-1 rounded">
// //             Register
// //           </button>
// //         </div>
// //       </div>

// //       {/* 🔍 SEARCH BAR */}
// //       <div className="bg-blue-700 p-6 flex justify-center">
// //         <div className="bg-white rounded-xl shadow-lg flex gap-2 p-3 w-[80%]">
          
// //           <input
// //             type="text"
// //             placeholder="Where are you going?"
// //             className="flex-1 p-2 outline-none"
// //             value={location}
// //             onChange={(e) => setLocation(e.target.value)}
// //           />

// //           <input type="date" className="p-2 border rounded" />
// //           <input type="date" className="p-2 border rounded" />

// //           <button className="bg-blue-600 text-white px-6 rounded">
// //             Search
// //           </button>
// //         </div>
// //       </div>

// //       {/* 🏨 HOTEL CARDS */}
// //       <div className="p-8 grid grid-cols-3 gap-6">
        
// //         {[1,2,3,4].map((item) => (
// //           <div key={item} className="bg-white rounded-xl shadow hover:shadow-xl transition">
            
// //             <img
// //               src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
// //               className="rounded-t-xl h-48 w-full object-cover"
// //             />

// //             <div className="p-4">
// //               <h2 className="text-xl font-bold">Deluxe Room</h2>
// //               <p className="text-gray-500">New Delhi</p>

// //               <div className="flex justify-between items-center mt-3">
// //                 <span className="text-green-600 font-bold">₹2999/night</span>
// //                 <button className="bg-blue-600 text-white px-4 py-1 rounded">
// //                   Book
// //                 </button>
// //               </div>
// //             </div>

// //           </div>
// //         ))}

// //       </div>

// //     </div>
// //   );
// // }
// export default function Home() {
//   return (
//     <div>

//       {/* HEADER */}
//       <div className="header">
//         <h2>HotelBooking</h2>
//         <div>
//           <button>Login</button>
//           <button style={{ marginLeft: "10px" }}>Register</button>
//         </div>
//       </div>

//       {/* SEARCH */}
//       <div className="search-box">
//         <div className="search-inner">
//           <input placeholder="Enter city..." />
//           <input type="date" />
//           <input type="date" />
//           <button>Search</button>
//         </div>
//       </div>

//       {/* CARDS */}
//       <div className="cards">
//         {[1,2,3].map((i) => (
//           <div className="card" key={i}>
//             <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" />
//             <div className="card-body">
//               <h3>Deluxe Room</h3>
//               <p>New Delhi</p>
//               <h4>₹2999/night</h4>
//               <button>Book Now</button>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const hotels = [
    {
      id: 1,
      name: "Deluxe Room",
      city: "New Delhi",
      price: 2999,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    {
      id: 2,
      name: "Luxury Suite",
      city: "Mumbai",
      price: 4999,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    },
    {
      id: 3,
      name: "Budget Room",
      city: "Jaipur",
      price: 1999,
      image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210a8",
    },
  ];

  return (
    <div>
      {/* HEADER */}
      <div className="header">
        <h2>HotelBooking</h2>

        <div>
          <Link to="/login">
            <button>Login</button>
          </Link>

          <Link to="/register">
            <button style={{ marginLeft: "10px" }}>Register</button>
          </Link>
        </div>
      </div>

      {/* SEARCH */}
      <div className="search-box">
        <div className="search-inner">
          <input placeholder="Enter city..." />
          <input type="date" />
          <input type="date" />
          <button>Search</button>
        </div>
      </div>

      {/* CARDS */}
      <div className="cards">
        {hotels.map((hotel) => (
          <div className="card" key={hotel.id}>
            <img src={hotel.image} alt={hotel.name} />

            <div className="card-body">
              <h3>{hotel.name}</h3>
              <p>{hotel.city}</p>
              <h4>₹{hotel.price}/night</h4>

              <button onClick={() => navigate("/login")}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}