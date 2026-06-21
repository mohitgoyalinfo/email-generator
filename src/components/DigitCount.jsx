import React from 'react'

const DigitCount = ({setDigits}) => {
  
  return (
      <div className="digit-count">
         <span>Number of digits (required) :</span>
        <input type = "radio" name="digitCount" value="2" onChange={() => setDigits(2)} />
         <label htmlFor="2">2 digits</label>
        <input type = "radio" name="digitCount" value="3" onChange={() => setDigits(3)} />
         <label htmlFor="3">3 digits</label>
         <input type='radio'  name="digitCount" value = "4" onChange={() => setDigits(4)}/>
         <label htmlFor="4">4 digits</label>
      </div>      
  )
}

export default DigitCount
