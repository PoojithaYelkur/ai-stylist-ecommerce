import { useEffect, useState } from "react";
import API from "../api";

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
        </div>
      ))}
    </div>
  );
}

export default Products;