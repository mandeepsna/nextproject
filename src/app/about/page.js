import React from "react"
import Link from "next/link";
const page = () => {
  return (
    <div>
     <h2 className="text-center text-danger">About Page</h2>
     <Link href={'/'}> <button className="btn btn-info">Home Page</button></Link>
    </div>
  )
};

export default page
