import { useNavigate } from "react-router-dom";

function Navbar(){

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("session");
    navigate("/");
  };

 const session = JSON.parse(localStorage.getItem("session"));
const userEmail = session?.email;

const cart = JSON.parse(localStorage.getItem("cart_" + userEmail)) || [];

const count = cart.reduce((sum,item)=> sum + item.quantity,0);

  return(

    <div className="bg-white shadow p-4 flex justify-between items-center">

      <h2
      className="text-xl font-bold cursor-pointer"
      onClick={()=>navigate("/dashboard")}
      >
      E-Commerce
      </h2>

      <div className="space-x-4">

        <button
        className="hover:text-blue-500"
        onClick={()=>navigate("/products")}
        >
        Products
        </button>

        <button
        className="hover:text-blue-500"
        onClick={()=>navigate("/cart")}
        >
        Cart ({count})
        </button>

        <button
        className="hover:text-blue-500"
        onClick={()=>navigate("/profile")}
        >
        Profile
        </button>

        <button
        className="text-red-500"
        onClick={logout}
        >
        Logout
        </button>

      </div>

    </div>

  );
}

export default Navbar;