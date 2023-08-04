import { employee } from "@/util/db";
import Link from "next/link";
import React from "react"

export const getUsers=async()=>
{
    const response=await fetch(process.env.API_URL);
    const data= await response.json();
    return data;
}
const page = async() => {
    const userValues= await getUsers();
  return (
    <>
    <h2 className="text-center mt-5">Employee Data </h2>
     <div className="col-md-6 mx-auto" >
      <table className="table table-bordered border-primary ">
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>City</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>

          {userValues.map((element) => {
            return (
            
                 <tr key={element.empid}>
               <td> <Link href={`/users/${element.empid}`}> {element.empid}</Link> </td>
                <td>{element.name}</td>
                <td>{element.city}</td>
                <td>{element.age}</td>
               
                <td>{element.salary}</td>
              </tr>
              
             );
          })
     
          }
          
        </table>
    </div>
    </>
  )
};

export default page
