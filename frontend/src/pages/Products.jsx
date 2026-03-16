import { useEffect, useState } from "react";
import API from "../api";
import Navbar from "../components/Navbar";

export default function Products() {

  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    API.get("/products")
      .then(res => setProducts(res.data));
  }, []);

  return (
    <>
      <Navbar />

      <div className="layout">

        {/* SIDEBAR */}

        <div className="sidebar">

          <h3>Category</h3>

          <p onClick={() => setFilter("All")}>All</p>
          <p onClick={() => setFilter("shirt")}>Shirts</p>
          <p onClick={() => setFilter("jeans")}>Jeans</p>
          <p onClick={() => setFilter("shoe")}>Shoes</p>
          <p onClick={() => setFilter("Dress")}>Dress</p>
          <p onClick={() => setFilter("Hoodie")}>Hoodie</p>
          <p onClick={() => setFilter("Jacket")}>Jacket</p>

        </div>


        {/* PRODUCTS */}

        <div className="products">

          {products
            .filter(
              p => filter === "All" || p.category === filter
            )
            .map(p => (

              <div className="card" key={p._id}>

                <img src={p.image} />

                <h3>{p.name}</h3>

                <p>{p.category}</p>

                <p>{p.description}</p>

                <p>₹ {p.price}</p>

                <button className="try">
                  Try Me
                </button>

              </div>

          ))}

        </div>

      </div>

    </>
  );
}