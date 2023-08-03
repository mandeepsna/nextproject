
import React from "react";
import Link from "next/link";

const FetchserverApi = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
};
const page = async () => {
 

  const products = await FetchserverApi();
  return (
    <>
     <Link href={"/"}>
        {" "}
        <button className="btn btn-info">Home Page</button>
      </Link>
    <div className="col-md-8 mx-auto">
        <table className="table table-bordered border-primary ">
          <tr>
            <th>Name of Product</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Category</th>
          </tr>

          { products.map((element) => {
            return (
              <tr key={element.id}>
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
