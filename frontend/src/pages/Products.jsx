import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Fragment/Navbar";
import { Plus, Star } from "@phosphor-icons/react";
import Footer from "./Footer";
import TableCart from "../Fragment/TableCart";

const Products = () => {
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
    <div data-theme="light" className="font-poppins text-xs">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          // tags: product.tags.map(tag => tag.name)
          <div
            className="flex shadow-md rounded-md m-5 md:m-10 gap-5 p-3"
            key={product.id}
          >
            <div className="relative">
              <img
                src={product.image}
                alt="image-products"
                className="rounded-lg max-w-32 h-32 object-cover"
              />
              <div className="text-xs flex items-center gap-1 absolute bottom-2 right-5 p-3 badge badge-xs ">
                <Star size={12} />
                {product.rate}/5({product.count})
              </div>
            </div>

            <div className="flex flex-col justify-between w-full">
              <div className="flex flex-col gap-2 ">
                <div className="font-bold text-base">
                  {product.title.substring(0, 30)}...
                </div>
                <div className="font-light text-xs">
                  {/* {product.tags.map((tag) => tag.name).join(" - ")} */}
                  {product.description.substring(0, 50)}...
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-bold">
                  Rp. {product.price.toLocaleString("id-ID")}
                </div>
                <div className="btn btn-neutral btn-xs ">
                  <Plus size={12} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-l">
        <h1 className="font-bold text-2xl">cart</h1>
        <TableCart products={products} />
      </div>

      <Footer />
    </div>
  );
};

export default Products;
