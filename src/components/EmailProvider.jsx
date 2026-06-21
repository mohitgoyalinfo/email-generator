import React from 'react'


const EmailProvider = ({email, setEmail }) => {
    
  return (
    <>
       <div className="email-provider">
      <span>Email Provider (required) :</span>
      <input type="radio" id="gmail.com" name="emailProvider" value="gmail.com" onChange={(e) => setEmail(e.target.value)}  checkded = {email === "gmail.com"} />
      <label htmlFor="gmail.com">Gmail</label>
      <input type="radio" id="yahoo.com" name="emailProvider" value="yahoo.com" onChange={(e) => setEmail(e.target.value)}  checked = {email === "yahoo.com"} />
      <label htmlFor="yahoo.com">Yahoo</label>
      <input type="radio" id="outlook.com" name="emailProvider" value="outlook.com" onChange={(e) => setEmail(e.target.value)}  checked = {email === "outlook.com"} />
      <label htmlFor="outlook.com">Outlook</label>
      </div>
       
    </>
  )
}

export default EmailProvider
