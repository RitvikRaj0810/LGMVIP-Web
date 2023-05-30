import React, { useState } from 'react'
import './App.css'
export default function App() {
  const [user,setUser]=useState([]);
  const loadUserData=async ()=>{
  const url="https://api.github.com/users";
  const response=await fetch(url);
  const parsedResponse=await response.json();
  setUser(parsedResponse);
  };

  return (
    <div style={{"text-align": 'center'}}>
      <h1>This is LGMVIP Task 2</h1>
      <p>Task 2: Using create react app, added a button 'Get Data' which fetches an Api and displayed it.</p>
      <button style={{'cursor':'pointer'}} onClick={loadUserData}>Get Data</button>
      <h2>Users:</h2>
      <ul>
        {user.map((element)=>(<li key={element.id}>Name:{element.login} Avatar:{element.avatar_url}</li>))}
      </ul>
    </div>
  )
}
