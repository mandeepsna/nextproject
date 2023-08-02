import React from "react"
import Image from 'next/image'
const page = () => {
  return (
    <div className="text-center">
        <Image src='/images/errorpage.jpg' alt='Image not found' width={800} height={800}></Image>
    </div>
  )
};

export default page
