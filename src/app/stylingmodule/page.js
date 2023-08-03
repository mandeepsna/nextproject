import React from "react"
import Styles from '@/styles/style.module.css' 
const page = () => {
  return (
    <div className="col-md-6 mx-auto">
    <h2 className= {`${Styles.textcenter} text-info text-uppercase `}>Lorem Ipsum</h2>
    <hr></hr>
      <p className={`${Styles.textjustify} ${Styles.textred}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <h3 id={Styles.green}>Using style with Id attribute</h3>
    </div>
  )
};

export default page
