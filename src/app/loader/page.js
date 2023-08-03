import React from "react";

const usercomments = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  return data;
};
const page = async () => {
  let comments = await usercomments();

  return (
    <div className="col-md-8 mx-auto">
      <table className="table table-bordered border-primary ">
        <tr>
          <th>Sr.No</th>
          <th>name</th>
          <th>email</th>
          <th>body</th>
        </tr>

        {comments.map((element) => {
          return (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.body}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default page;
