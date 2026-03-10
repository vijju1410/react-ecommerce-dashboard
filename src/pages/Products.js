import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Products(){

  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true);

  const navigate = useNavigate();

useEffect(() => {

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

    axios.get("https://fakestoreapi.com/products")

    .then(res=>{
      setProducts(res.data);
      setLoading(false);
    })

    .catch(err=>{
      console.log(err);
      setLoading(false);
    });

  },[]);

  if(loading){
    return <h2 className="p-10">Loading products...</h2>;
  }
  const addToCart = (product) => {

  const session = JSON.parse(localStorage.getItem("session"));
  const userEmail = session?.email;

  let cart = JSON.parse(localStorage.getItem("cart_" + userEmail)) || [];

  const existing = cart.find(item => item.id === product.id);

  if(existing){
    existing.quantity += 1;
  }else{
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  localStorage.setItem("cart_" + userEmail, JSON.stringify(cart));

  Swal.fire({
    icon: "success",
    title: "Added to Cart",
    text: "Product added successfully",
    timer: 1200,
    showConfirmButton: false
  });

};

  return(

    <div className="bg-gray-100 min-h-screen">

    <Navbar/>

    <div className="p-10">

      <h2 className="text-2xl font-bold mb-6">
        Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map(product=>(

          <div key={product.id} className="bg-white p-4 shadow rounded">

            <img
              src={product.image}
              alt=""
              className="h-40 mx-auto mb-3"
            />

            <h3 className="text-sm font-semibold mb-2">
              {product.title}
            </h3>

            <p className="text-green-600 font-bold mb-3">
              ${product.price}
            </p>

           <button
className="bg-blue-500 text-white px-3 py-1 rounded w-full"
onClick={()=>addToCart(product)}
>
Add to Cart
</button>

          </div>

        ))}

      </div>

    </div>
    </div>

  );
}

export default Products;