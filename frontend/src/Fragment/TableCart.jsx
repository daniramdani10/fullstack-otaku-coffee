import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  // const totalPriceRef = useRef(null);

  // useEffect(() => {
  //   if (cart.length > 0) {
  //     totalPriceRef.current.style.display = "table-row";
  //   } else {
  //     totalPriceRef.current.style.display = "none";
  //   }
  // }, [cart]);
  return (
    <table className="text-left table-auto border-separate border-spacing-x-5 border-spacing-y-3">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={item.id}>
                <td>{product.title.substring(0, 20)}...</td>
                <td>Rp. {product.price.toLocaleString("id-ID")}</td>
                <td>{item.qty}</td>
                <td>
                  Rp. {(product.price * item.qty).toLocaleString("id-ID")}
                </td>
              </tr>
            );
          })}
        <tr className={`${cart.length > 0 ? "table-row" : "hidden"}`}>
          <td colSpan={3}>
            <b>Total Price</b>
          </td>
          <td>
            <b>{"Rp. " + totalPrice.toLocaleString("id-ID")}</b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
