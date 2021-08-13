import { template } from "@babel/core";
import React,{useState,useEffect} from "react";
import './App.css'
import Template from "./template";
import Meme from "./meme";

function App() {

  const[templates,setTemplates]=useState([]);
  const[meme,setMeme]=useState(null);

 useEffect(()=>{
   fetch('https://api.imgflip.com/get_memes').then(res=>res.json()).then((data)=>setTemplates(data.data.memes))
 },[]
 )
  return (
<>
<div className="App">
  <h4>MEME GENERATOR</h4>
   {meme===null ? <Template templates={templates} setMeme={setMeme}/> :<Meme meme={meme} setMeme={setMeme}/> }
</div>
</>
  );
}

export default App;
