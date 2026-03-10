import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";


function Dashboard() {

  const navigate = useNavigate();

  useEffect(() => {

    const session = JSON.parse(localStorage.getItem("session"));

    // if no session → go to login
    if (!session) {
      navigate("/");
      return;
    }

    // if session expired
    if (Date.now() > session.expiry) {
      localStorage.removeItem("session");
Swal.fire({
  icon: "warning",
  title: "Session Expired",
  text: "Please login again",
  confirmButtonColor: "#3085d6"
});     
 navigate("/");
    }

  }, []);

  const user = JSON.parse(localStorage.getItem("user"));
return (

  <div className="min-h-screen bg-gray-100">

    <Navbar />

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        Welcome {user?.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Products Card */}
        <div className="bg-white p-6 rounded shadow">

          <h2 className="text-xl font-semibold mb-2">
            Products
          </h2>

          <p className="text-gray-500 mb-4">
            View all available products
          </p>

          <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={()=>navigate("/products")}
          >
          Go to Products
          </button>

        </div>

        {/* Cart Card */}
        <div className="bg-white p-6 rounded shadow">

          <h2 className="text-xl font-semibold mb-2">
            Cart
          </h2>

          <p className="text-gray-500 mb-4">
            Check items added to your cart
          </p>

          <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={()=>navigate("/cart")}
          >
          View Cart
          </button>

        </div>

        {/* Profile Card */}
        <div className="bg-white p-6 rounded shadow">

          <h2 className="text-xl font-semibold mb-2">
            Profile
          </h2>

          <p className="text-gray-500 mb-4">
            Update your account information
          </p>

          <button
          className="bg-purple-500 text-white px-4 py-2 rounded"
          onClick={()=>navigate("/profile")}
          >
          Go to Profile
          </button>

        </div>

      </div>

    </div>

  </div>

);
}

export default Dashboard;