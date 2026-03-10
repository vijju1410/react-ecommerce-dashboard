import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Cart(){

  const [cart,setCart] = useState([]);
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
  }

},[]);

  useEffect(()=>{

  const session = JSON.parse(localStorage.getItem("session"));
  const userEmail = session?.email;

  const savedCart = JSON.parse(localStorage.getItem("cart_" + userEmail)) || [];

  setCart(savedCart);

},[]);

  const increaseQty = (id) => {

    const updated = cart.map(item =>
      item.id === id
      ? {...item, quantity: item.quantity + 1}
      : item
    );

    setCart(updated);
    const session = JSON.parse(localStorage.getItem("session"));
const userEmail = session?.email;

localStorage.setItem("cart_" + userEmail, JSON.stringify(updated));
  };

  const decreaseQty = (id) => {

  let updated = cart.map(item =>
    item.id === id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );

  // remove items with quantity 0
  updated = updated.filter(item => item.quantity > 0);

  setCart(updated);

  const session = JSON.parse(localStorage.getItem("session"));
  const userEmail = session?.email;

  localStorage.setItem("cart_" + userEmail, JSON.stringify(updated));
};
  const removeItem = (id) => {

    const updated = cart.filter(item => item.id !== id);

    setCart(updated);
   const session = JSON.parse(localStorage.getItem("session"));
const userEmail = session?.email;

localStorage.setItem("cart_" + userEmail, JSON.stringify(updated));
  };

  const total = cart.reduce((sum,item)=>sum + item.price * item.quantity,0);

  return(

      <div className="min-h-screen bg-gray-100">

    <Navbar/>

    <div className="p-10">

      {cart.length === 0 && (
  <p className="text-center text-gray-500 text-lg">
    Your cart is empty
  </p>
)}

      {cart.map(item=>(

        <div key={item.id} className="flex items-center gap-4 mb-4 border p-4">

          <img src={item.image} alt="" className="h-16"/>

          <div className="flex-1">
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>

          <button
          className="bg-gray-300 px-2"
          onClick={()=>decreaseQty(item.id)}
          >
          -
          </button>

          <span>{item.quantity}</span>

          <button
          className="bg-gray-300 px-2"
          onClick={()=>increaseQty(item.id)}
          >
          +
          </button>

          <button
          className="bg-red-500 text-white px-3 py-1"
          onClick={()=>removeItem(item.id)}
          >
          Remove
          </button>

        </div>

      ))}

      <h3 className="text-xl font-bold mt-6">
        Total: ${total.toFixed(2)}
      </h3>

    </div>
    </div>

  );
}

export default Cart;