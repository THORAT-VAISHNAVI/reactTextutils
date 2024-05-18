import React,{useState} from 'react'

export default function TextForm(Props) {
  const [text,setText]=useState(" ");
  const handleUpClick= () =>{
    console.log("Uppercase was clicked..." + text);
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handleOnChange= (event)=>{
    console.log("On change...");
    setText(event.target.value);
  }

  const handleLoClick=()=>{
    console.log("Lowercase was clicked..." + text);
    let newText=text.toLowerCase();
    setText(newText);
  }

  const handleClearClick=()=>{
    console.log("Clear text was clicked...");
    let newText=("");
    setText(newText);
  }

  const handleCopyClick=()=>{
    console.log("Copy text was clicked...");
    var text=document.getElementById("mybox");
    text.select()
    navigator.clipboard.writeText(text.value);
  }

  const handleRemoveClick=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  return (
    <>
    <div>
        <h1> {Props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleRemoveClick}>Remove extra spaces</button>
    </div>
    <div className="container my-3">
      <h2> Your Text Summary </h2>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

