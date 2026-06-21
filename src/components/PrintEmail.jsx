import React from 'react'
import toast, { Toaster } from "react-hot-toast";

 

toast.success("Email copied successfully!");
const PrintEmail = ({ data, email, random }) => {
  
  const handlecopy = () => {
    navigator.clipboard.writeText(`${data}${random}@${email}`)
    toast.success("Email copied successfully!");
  }
  return (
  <div className="email-container">
  <span>{`${data}${random}@${email}`}</span>
  <Toaster position="top-center"/>
   <button id="copyButton" onClick={handlecopy} >Copy Email</button>
    </div>
)}

export default PrintEmail
