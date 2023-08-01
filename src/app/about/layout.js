'use client'
import Link from "next/link";
import React from "react"
import { usePathname } from "next/navigation";
import { useState } from "react";
const layout = ({children}) => {

  const pathname=usePathname();
  const theArray=[
    '/about/aboutcollege',
    '/about/aboutcollege/bfcop'
   ] 
  
  return (
    <>
      
    <div>
       
       
        <ul className="d-flex justify-content-end list-unstyled fs-5">
             <li className="m-3">About Navbar</li>
             <Link href={'/about'} className="text-decoration-none"><li >About Main</li> </Link>
             <Link href={'/about/aboutstudent'} className="text-decoration-none"><li > About Student</li> </Link>
             <Link href={'/about/aboutcollege'} className="text-decoration-none"><li > About College</li> </Link>
             <Link href={'/about/aboutcollege/bfcop'} className="text-decoration-none"><li >BFCOP</li> </Link>
        </ul>
       

    
    </div>
   
  
    <div> {children}</div>
    </>
  )
};

export default layout