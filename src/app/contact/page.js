import React from "react"
import Link from "next/link";
const contact  = () => {
  return (
    <div>
      <h2 className="text-center text-danger">Contact Page</h2>
      <Link href={'/'}> <button className="btn btn-info">Home Page</button></Link>
    </div>
  )
};

export default contact
