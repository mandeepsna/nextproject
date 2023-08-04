import React from "react"

export const getUser=async(id)=>
{
   const response=await fetch(`${process.env.API_URL}/${id}`);
   const data=await response.json();
   return data;
}
const page = async ({params}) => {
   const user = await getUser(params.dynamicuser);
    console.log(user);
  return (
    <>
    <h2 className="text-center mt-5">User Detail</h2>
   <div className="col-md-4 mx-auto">
    
    <table className="table table-bordered border-primary">
      <th>Employe ID</th>
      <th>Employe Name</th>
      <th>Employe Age</th>
      <th>Employe Salary</th>
   <tr>

   
     
     <td> <h4>{user[0].empid}</h4></td>
     <td> <h4>{user[0].name}</h4></td>
     <td> <h4>{user[0].age}</h4></td>
     <td> <h4>{user[0].salary}</h4></td>
    
      </tr>
      </table>
    </div>
    </>
  )
};

export default page

