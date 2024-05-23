"use client"

import React, { useState } from "react";

export default function Home() {
  
  const  [dark, setDark] = useState(false)

    const handleThem = () =>{
        setDark((a) => !a);
    }
  return (
    <>
    
        <div style={{ height:"500px",widows:"500px",   backgroundColor:dark ? "#000":"#fff"}}>

<span style={{color: dark ? "#fff":"#000"}}>light mode and darkmode</span>

<button onClick={handleThem} className="ml-10 text-red-900">submit</button>
      </div>
    </>
   
  );
}
