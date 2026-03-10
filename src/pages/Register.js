import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
function Register(){

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {

  const nameRegex = /^[A-Za-z ]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!nameRegex.test(name)){
    Swal.fire({
      icon: "error",
      title: "Invalid Name",
      text: "Name should contain only letters"
    });
    return;
  }

  if(!emailRegex.test(email)){
    Swal.fire({
      icon: "error",
      title: "Invalid Email",
      text: "Please enter a valid email address"
    });
    return;
  }

  if(password.length < 6){
    Swal.fire({
      icon: "error",
      title: "Weak Password",
      text: "Password must be at least 6 characters"
    });
    return;
  }

  // get existing users
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // check duplicate email
  const existingUser = users.find(user => user.email === email);

  if(existingUser){
    Swal.fire({
      icon: "error",
      title: "Email Already Exists",
      text: "Please use a different email"
    });
    return;
  }

  const newUser = { name, email, password };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  Swal.fire({
    title: "Success!",
    text: "Registration completed successfully",
    icon: "success",
    timer: 1600,
    showConfirmButton: false
  });

  navigate("/");
};
  return(

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-lg shadow-md w-96">

        <h2 className="text-2xl font-bold text-center mb-6">
          Register
        </h2>

        <input
          placeholder="Name"
          className="w-full border p-2 mb-4 rounded"
          onChange={(e)=>setName(e.target.value)}
        />

        <input
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
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          onClick={handleRegister}
        >
          Register
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?
          <Link to="/" className="text-blue-500 ml-1">
            Login
          </Link>
        </p>

      </div>

    </div>

  );
}

export default Register;