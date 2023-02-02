import React, {Component, useState} from "react";
import '../styles/App.css';

function App(){

  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[gender,setGender] = useState("");
  const[number,setNumber] = useState("");
  const[password,setPassword] = useState("");
  const[error,setError] =useState("");
   
  function nameChange(e){
    setName(e.target.value);
  }
  function emailChange(e){
    setEmail(e.target.value);
  }
  function genderChange(e){
    setGender(e.target.value);
  }
  function numberChange(e){
    setNumber(e.target.value);
  }
  function passwordChange(e){
    setPassword(e.target.value);
  }

  function submitDetails(){
    if(!name || !email || !gender || !number||!password){
          setError("All Feilds are required");
        }
        else if(!email.includes("@")){
          setError("Email is invalid");
        }
        else if(password.length<8){
          setError("password length should be 8");
        }
        else{
          setError("");
          alert("Hurrah! Form Submitted");
        }
  }

  return (
    <div id="main">
       
      <form>
        <input type="text" data-testid='name' placeholder="Name"/>
        <br/>
        <input type="text" data-testid='email' placeholder="Email"/>
        <br/>
        <select data-testid='gender'>
          <option>Male</option>
          <option>Female</option>
        </select>
        <br/>
        <input type="number" data-testid='phoneNumber' placeholder="Phone Number"/>
        <br/>
        <input  type="password" data-testid='password' placeholder="Password"/>
        <br/>
        <button data-testid='submit'>Submit</button>

      </form>
    </div>
  )
}


export default App;
