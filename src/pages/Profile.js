import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
function Profile(){

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(()=>{

  const session = JSON.parse(localStorage.getItem("session"));

  if(!session){
    navigate("/");
    return;
  }

  if(Date.now() > session.expiry){
    localStorage.removeItem("session");
    Swal.fire({
      icon: "warning",
      title: "Session Expired",
      text: "Please login again",
      confirmButtonColor: "#3085d6"
    });
    navigate("/");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const currentUser = users.find(u => u.email === session.email);

  if(currentUser){
    setName(currentUser.name);
    setEmail(currentUser.email);
    setPassword(currentUser.password);
  }

},[]);
  const handleUpdate = () => {

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

  const session = JSON.parse(localStorage.getItem("session"));
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const updatedUsers = users.map(u =>
    u.email === session.email
      ? { name, email, password }
      : u
  );

  localStorage.setItem("users", JSON.stringify(updatedUsers));

  Swal.fire({
    icon: "success",
    title: "Profile Updated",
    text: "Your profile was updated successfully",
    confirmButtonColor: "#3085d6"
  });
};
  return(

    <div className="min-h-screen bg-gray-100">

      <Navbar/>

      <div className="flex justify-center items-center mt-16">

        <div className="bg-white p-8 rounded-lg shadow w-96">
<div className="flex justify-center mb-4">
  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
    {name ? name.charAt(0).toUpperCase() : "U"}
  </div>
</div>
          <h2 className="text-2xl font-bold mb-6 text-center">
            My Profile
          </h2>

          <label className="block text-sm mb-1">Name</label>
          <input
          className="border p-2 w-full mb-4 rounded"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />

          <label className="block text-sm mb-1">Email</label>
          <input
          className="border p-2 w-full mb-4 rounded"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />

          <label className="block text-sm mb-1">Password</label>
          <input
          type="password"
          className="border p-2 w-full mb-6 rounded"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />

          <button
          className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
          onClick={handleUpdate}
          >
          Update Profile
          </button>

        </div>

      </div>

    </div>

  );
}

export default Profile;