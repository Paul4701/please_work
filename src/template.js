const Template=({templates,setMeme})=>{
    return(
<div className="templates">
{templates.map((template)=>(
    <div key={template.id} className='template' onClick={()=>{
        setMeme(template)
    }}>
      <div className="image" style={{background:`url(${template.url})`,backgroundSize:'cover'}}>
{console.log('div')}
      </div>
    </div>
  ))}
</div>
    )
}

export default Template;