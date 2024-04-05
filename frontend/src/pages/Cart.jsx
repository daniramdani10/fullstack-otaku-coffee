import React, { useEffect, useState } from "react";
import TableCart from "../Fragment/TableCart";
import axios from "axios";

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="border-l">
      <h1 className="font-bold text-2xl">cart</h1>
      <TableCart products={products} />
    </div>
  );
};

export default Cart;
