import { useState } from "react";
const Meme=({meme,setMeme})=>{
    const [form,setform]=useState({
      template_id:meme.id,
      username:"teasty",
      password:"PPS$Asr52ttCfaF",
      boxes:[],
    })
    const generateMeme=()=>{
   
        let url=`https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
        form.boxes.map((box,ind)=>{
       url += `&boxes[${ind}][text]=${box.text}`;
        });
        fetch(url).then(res=>res.json()).then((data)=>{
           
          setMeme({...meme,url:data.data.url})
        })
        
    }
   

    
    const download=()=>{
    

     
    }
return (<div className="meme">
    <img src={meme.url} />
    <div>
  
       {
        [...Array(meme.box_count)].map((el,ind)=>{
           
          
           return(<input key={ind} type="text" placeholder={`meme cpation ${ind+1}`} onChange={(e)=>{
               const newboxes=form.boxes;
               newboxes[ind]={text:e.target.value};
               setform({...form,boxes:newboxes})
           }} ></input>)
         
        })
    }
   
    </div>
  
        <div>
            <button onClick={generateMeme}>Generate Meme</button>
            <button onClick={()=>setMeme(null)}>choose Template</button>
      <a href={meme.url} target="_blank"><button  >download</button> </a>      
        </div>
        <div>CREATED BY PINTU :)</div>
    
</div>)
}

export default Meme;