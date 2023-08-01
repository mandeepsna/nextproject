import Link from "next/link";
import React from "react"

const layout = ({children}) => {
  return (
    <>
    <div>
        <ul className="d-flex justify-content-end list-unstyled fs-5">
             <li className="m-3">Login Navbar</li>
             <Link href={'/login'} className="text-decoration-none"><li > Login Main</li> </Link>
             <Link href={'/login/studentlogin'} className="text-decoration-none"><li > Student Login</li> </Link>
             <Link href={'/login/teacherlogin'} className="text-decoration-none"><li > Teacher Login</li> </Link>
        </ul>
    </div>
    <div> {children}</div>
    </>
  )
};

export default layout
