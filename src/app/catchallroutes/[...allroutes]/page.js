'use client'
import React from "react"

const page = ({params}) => {
   console.log(params);
  return (
    <div>
        <h2>The route is {`${params.allroutes}`} </h2>
         
    </div>
  )
};

export default page
