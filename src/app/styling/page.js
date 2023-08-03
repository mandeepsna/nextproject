'use client'
import React from "react"
const page = () => {
    
  return (
    <>
     <style jsx>
             {`
                .color
                {
                     color:aqua;
                }

                .size
                {
                   font-size:50px;
                }
                .textcenter
                {
                    text-align: center;
                    border: 3px solid green; 
                }
             `}
        </style>
    <div>
     <h2 style={{color:'red'}}> Inline Styling </h2>
     <h2 className="size color textcenter"> Styling with Tag </h2>
    </div>
    </>
  )
};

export default page
