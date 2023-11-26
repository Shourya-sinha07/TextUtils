import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUPClick =()=>{
       // console.log("Upper Case was triggereed"+ text)
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to upper case successfully","success")
    }
    const handleLOWClick =()=>{
       // console.log("Lower Case was triggereed"+ text)
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert("converted to lower case successfully","success")

    }
    const handleClearClick =()=>{
        console.log("Lower Case was triggereed"+ text)
        let newtext="";
        setText(newtext)
    }
    const handleonChange =(event)=>{
        console.log("on change")
        setText(event.target.value)
    }
    const handleCopy =()=>{
      console.log("I am copy");
      var text= document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard","success")
    }
     const handleExtraSpace=()=>{
let newText=text.split(/[ ]+/);
console.log(text)
console.log(newText)
setText(newText.join(" "))

     }
    const[text,setText]=useState(' ');
  return (
    <>

<div className="mb-3 container" style={{color:props.mode ==='dark'?'white':'black'}}>
    <h1>{props.heading} </h1>
  {/* <label  className="form-label">Example textarea</label> */}
  <textarea className="form-control" id="myBox" value={text} onChange={handleonChange} rows="8" style={{backgroundColor:props.mode ==='dark'?'grey':'white' ,color:props.mode ==='dark'?'white':'black'}}></textarea>
  <button className="btn btn-primary mt-3 mx-1" onClick={handleUPClick}>Convert To Upper Case</button>
  <button className="btn btn-primary mt-3 mx-1" onClick={handleLOWClick}>Convert To Lower Case</button>
  <button className="btn btn-primary mt-3 mx-1" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary mt-3 mx-1" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mt-3 mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
</div>
<div className="container" style={{color:props.mode ==='dark'?'white':'black'}}>
  <h1>Your text summary</h1>
  <p>{text.split(" ").length} words and {text.length} character</p>
 <p>{0.008 *text.split(" ").length} Minutes</p>
 <h2>Preview</h2>
 <p>{text.length>0?text:"Enter something in the text area to preview it here"}</p>
</div>
    </>
  )
}
