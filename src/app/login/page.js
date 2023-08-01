'use client'
import React from "react"
import { useRouter } from "next/navigation";
const page = () => {
  const router=useRouter();
  return (
    <div>
      <h2 className="text-center text-danger">Login Page</h2>
       <button className="btn btn-danger" onClick={()=>router.push('/')} >Go to Home</button>
    </div>
  )
};

export default page
