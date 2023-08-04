import React from "react"

const page = ({params}) => {
    console.log(params);
  return (
    <div>
       <h2>Dynamic Path of {params.dynamicpath}</h2>
    </div>
  )
};

export default page
