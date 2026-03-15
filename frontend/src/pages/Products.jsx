import { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await API.get("/products");
      console.log("DATA:", res.data);
      setProducts(res.data);
    } catch (err) {
      console.log("ERROR:", err);
    }
  };
  const navigate = useNavigate();


  return (
    <div>
      <h2>Products Page</h2>

      {products.length === 0 && <p>No products</p>}

      {products.map((p) => (
        <div key={p._id}>
          <h3>{p.name}</h3>
          <p>{p.price}</p>
          <p>{p.category}</p>
          <p>{p.gender}</p>
            <button onClick={() => navigate("/tryme")}>
              Try Me 
            </button>
        </div>
        
      ))}
    </div>
  );
}

export default Products;