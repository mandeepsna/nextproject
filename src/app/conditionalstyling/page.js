'use client'
import React from "react"
import style from '@/styles/style.module.css'
import {useState} from "react"

const page = () => {
       const[color,setColor]=useState('red')
  return (
    <div className="col-md-7 mx-auto mt-5">
      <h2 className={color=='red' ? style.bgblack : style.bgred}>Conditional Styling</h2>
      <hr></hr>
      <p className={`${color=='red' ? style.textred :style.textyellow} ${style.textjustify}`} > It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose </p>
    </div>
  )
};

export default page
