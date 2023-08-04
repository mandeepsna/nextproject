import React from "react"

const page = () => {
 
    return (
    <div className="text-center">
     
      <h2>Envoirnemnt Variables</h2>
      <br></br>
      <br></br>
      <br></br>
      <h3>Server Password={process.env.SERVER_PASSWORD}</h3>
      <h3>DataBase Password={process.env.DB_PASSWORD}</h3>
      <h3>Custom Mode={process.env.CUSTOM_MODE}</h3>
    </div>
  )
};

export default page
