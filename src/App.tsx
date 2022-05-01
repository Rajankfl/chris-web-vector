import React, { Component, useState } from "react";
import Sketch from "./Sketch";

export default function App(){
    const [tool,setTool]=useState('tool2');
    return (
      <div>
          <p><a href="#" onClick={()=>{setTool('tool1')}}>Simple Lines</a><a href="#" onClick={()=>{setTool('tool2')}}>Cloudy Lines</a></p>
        <canvas id="myCanvas" style={{border: '1px solid black'}}></canvas>
        <Sketch tool={tool}/>
      </div>
    );
  }

