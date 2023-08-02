//Client Side Rendring of API

"use client";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const page = () => {
  let [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setProduct(response.data.products);
    });
  }, []);
  return (
    <>
      <Link href={"/"}>
        {" "}
        <button className="btn btn-info">Home Page</button>
      </Link>
      <div className="col-md-8 mx-auto">
        <table className="table table-bordered border-primary ">
          <tr>
            <th>Sr.No</th>
            <th>Name of Product</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Category</th>
       
          </tr>

          {product.map((element) => {
            return (
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.title}</td>
                <td>{element.price}</td>
                <td>{element.brand}</td>
                <td>{element.category}</td>
               
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default page;
