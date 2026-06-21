import { useRef, useState } from 'react';
import './App.css'
import PrintEmail from './components/PrintEmail';
import toast, { Toaster } from "react-hot-toast";
import EmailProvider from './components/EmailProvider';
import DigitCount from './components/DigitCount';

function App() {
  const [data, setData] = useState("");
  const [email, setEmail] = useState();
  const [digits, setDigit] = useState(0);
  const [_, forceUpate] = useState({});  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const random =  new Set();
  if(digits == 2) {
     while(random.size < 20) {
    random.add(Math.floor(Math.random() * 90) + 10);
      }
     }
  else if(digits == 3) {
     while(random.size < 20 ) {
    random.add(Math.floor(Math.random() * 900) + 100);
  }
}
  else if(digits == 4) {
     while(random.size < 20) {
    random.add(Math.floor(Math.random() * 9000) + 1000);
  }  
}
 
 
  function setDigits(newDigits) {
    setDigit(newDigits);
  }
  const handleclick = () => {
    if(digits === 0) {
      toast.error("Please fill all required fields");
      return;
    } 
    const newData = `${firstName}${lastName}`;
    setData(newData);
  }

  return (
    <div className="App">
      <h1>Email Generator</h1>
      <Toaster position="top-center"/>
      <label htmlFor="firstName">First Name (required) :  
      <input id="firstName" type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} /></label>
      <label htmlFor="lastName">Last Name (Optional) :
      <input id="lastName" type="text" placeholder="Enter last name " value={lastName} onChange={(e) => setLastName(e.target.value)} /></label>
      <EmailProvider  email={email} setEmail={setEmail} />
      <DigitCount setDigits={setDigits} ></DigitCount>
      <button className="generateButton"  type="reset" id="resetButton" onClick={() => {setData(""); setEmail(email); setDigits(digits); setFirstName(""); setLastName("");}} >Reset</button>
      <button className="generateButton" onClick={handleclick} disabled ={
        !firstName || !email || digits == 0
      } >Generate Email</button>
      <div style={{display: data ? 'flex' : 'none'}} className="email-list">
      {Array.from({ length: 20 }, (_, i) => (
        <PrintEmail key={i} data={data} random={Array.from(random)[i]} email = {email}/>
      ))}
      </div> 
    </div>
  )
}

export default App
