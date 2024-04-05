import React, { useEffect, useState } from "react";
import CardProduct from "../Fragment/CardProduct";
import TableCart from "../Fragment/TableCart";
import Navbar from "../Fragment/Navbar";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const url = "http://localhost:2000";

  useEffect(() => {
    fetch(`${url}/products/`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex h-screen">
        <div className="w-4/6">
          <div className="flex gap-3 mx-10 my-5  flex-wrap">
            {products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header
                  image={product.image}
                  alt={product.title}
                  id={product.id}
                />
                <CardProduct.Body
                  title={product.title}
                  price={"Rp. " + product.price.toLocaleString("id-ID")}
                />
                <CardProduct.Footer id={product.id} />
              </CardProduct>
            ))}
          </div>
        </div>

        <div className="w-2/6 p-5 border-l">
          <h1 className="font-bold text-2xl">cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
