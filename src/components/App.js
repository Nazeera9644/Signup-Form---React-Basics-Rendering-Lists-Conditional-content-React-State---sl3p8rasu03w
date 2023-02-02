import React, {Component, useState} from "react";
import '../styles/App.css';

function App(){


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
