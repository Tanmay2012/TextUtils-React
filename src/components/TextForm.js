import React, { useState } from 'react';


export default function TextForm(props) {
      const [text, setText] = useState("");
      const wordcount=()=>{
            if (text==='')
            {
                  return 0;
            } 
             else
            {
                  let state= 'out';
                  let wc=0;
                  for(let i=0;i<text.length;i++)
                  {
                        let character=text.charAt(i);
                        if (character === ' ' || character === '\n' || character=== '\t')
                          state = 'out';
                        else if(state==='out')
                        {
                              state='in';
                              ++wc;
                        }
                  }
                  return wc;
            }
      }
      const handleOnChange=(event)=>{
            setText(event.target.value);
      }
      const handleUpClick=()=>{
            let newText=text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to UpperCase!",'success');
      }
      const handleLoClick=()=>{
            let newText=text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to LowerCase!",'success');
      }
      const handleClearClick=()=>{
            let newText="";
            setText(newText);
            props.showAlert("Text cleared!",'success');
      }
      const handleCopy=()=>{
            let newtext=document.getElementById("myBox")
            newtext.select();
            navigator.clipboard.writeText(newtext.value);
            props.showAlert("Copied to Clipboard!",'success');
      }
      const handleExtraSpaces=()=>{
            let newText=text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Extra spaces removed!",'success');
      }
  return (
  <>
  <div className="container" style={{ color : props.mode==='dark'?'white':'black'}}>   
      <h1>{props.heading}</h1>
      <div className="mb-3" >
      <textarea className="form-control"  style={{backgroundColor : props.mode==='dark'?'#171717':'white',color:props.mode==='dark'?'white':'black'}}id="myBox" value={text} onChange={handleOnChange} rows="7"></textarea>
      </div>
      <button className="btn btn-primary my-2" onClick={handleUpClick} style={{backgroundColor : props.mode==='dark'?'#444444':'#0d6efd',border :props.mode==='dark'?'#444444':'#0d6efd'}}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick} style={{backgroundColor : props.mode==='dark'?'#444444':'#0d6efd',border :props.mode==='dark'?'#444444':'#0d6efd'}}>Convert to Lowercase</button>
      <button className="btn btn-primary my-2" onClick={handleClearClick} style={{backgroundColor : props.mode==='dark'?'#444444':'#0d6efd',border :props.mode==='dark'?'#444444':'#0d6efd'}}>Clear Text</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleCopy} style={{backgroundColor : props.mode==='dark'?'#444444':'#0d6efd',border :props.mode==='dark'?'#444444':'#0d6efd'}}>Copy Text</button>
      <button className="btn btn-primary my-2" onClick={handleExtraSpaces} style={{backgroundColor : props.mode==='dark'?'#444444':'#0d6efd',border :props.mode==='dark'?'#444444':'#0d6efd'}}>Remove Extra Spaces</button>
  </div>
  <div className="container my-2" style={{ color : props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{wordcount()} words and {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
  </div>
  </> 
  
  )
}
