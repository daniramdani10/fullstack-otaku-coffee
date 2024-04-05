import React from "react";
import { useParams } from "react-router-dom";
const DetailProductPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>produk : {id}</h1>
    </div>
  );
};

export default DetailProductPage;
