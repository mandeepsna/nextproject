'use client'
import Link from "next/link";

import React from "react"

const page = ({params}) => {
 // console.log(params);
  return (
    <div>
      <h2>Student Details</h2>
      <h2>The student Id is {params.studentlist}</h2>
    
    </div>
  )
};

export default page
