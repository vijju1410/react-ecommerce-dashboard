import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {

const users = JSON.parse(localStorage.getItem("users")) || [];

const user = users.find(
  u => u.email === email && u.password === password
);
    if(user && user.email === email && user.password === password){

      const session = {
        email: email,
        expiry: Date.now() + 5 * 60 * 1000
      };

      localStorage.setItem("session", JSON.stringify(session));

      navigate("/dashboard");

    } else {
Swal.fire({
  icon: "error",
  title: "Login Failed",
  text: "Invalid email or password"
});    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-lg shadow-md w-96">

        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4 rounded"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="text-center mt-4 text-sm">
          Don't have an account? 
          <Link to="/register" className="text-blue-500 ml-1">
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;