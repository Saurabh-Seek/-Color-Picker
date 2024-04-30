"use client"
import React, { useState } from "react";
export default function Home() {
  const [color, setColor] = useState('#000000');
  const handleColorChange = (e:any) => {
    setColor(e.target.value);
  };
  return (
    <>
      <input type="color" value={color} onChange={handleColorChange} />
      <div style={{ height: "500px", width: "500px", backgroundColor: color }}></div>
    </>
  );
}