import React from "react"
import Image from "next/image";
import imageflower from '../../../public/images/flowers.avif'

const page = () => {
  return (
    <div >
    <h2  className="text-center">Image Opimization </h2>
     <div  >
      <Image
        src={imageflower}
        style={{borderRadius:'50px'}}
        width={500}
        height={500}
        alt='Image not Found'
      />
   <Image
    src={'https://images.pexels.com/photos/762041/pexels-photo-762041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
    width={500}
    height={500}
    style={{borderRadius:'50px'}}

   />
    <Image
    src={'https://images.unsplash.com/photo-1690179677846-3e0a30769630?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'}
    width={500}
    height={500}
    style={{borderRadius:'50px'}}

   />
   
      </div>
    </div>
  )
};

export default page
