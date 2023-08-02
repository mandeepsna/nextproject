import React from "react"
import Image from 'next/image'
const notfound = () => {
  return (
    <div className="text-center">
        <Image src='/images/notfound.jpg' alt='Image not found' width={800} height={800}></Image>
    </div>
  )
};

export default notfound
