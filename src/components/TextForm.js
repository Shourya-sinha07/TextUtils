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
      // document.getSelection().removeAllRanges();  -->uncomment this line if we want to deselect the text automatically
      props.showAlert("Copied to clipboard","success")
    }
     const handleExtraSpace=()=>{
let newText=text.split(/[ ]+/);
console.log(text)
console.log(newText)
setText(newText.join(" "))

     }
    const[text,setText]=useState('');
  return (
    <>

<div className="mb-3 container" style={{color:props.mode ==='dark'?'white':'black'}}>
    <h1 className='mb-4 mt-4'>{props.heading} </h1>
  {/* <label  className="form-label">Example textarea</label> */}
  <textarea className="form-control" id="myBox" value={text} onChange={handleonChange} rows="8" style={{backgroundColor:props.mode ==='dark'?'#13466e':'white' ,color:props.mode ==='dark'?'white':'black'}}></textarea>
  <button disabled={text.length===0} className="btn btn-primary mt-3 mx-1 my-1" onClick={handleUPClick}>Convert To Upper Case</button>
  <button disabled={text.length===0} className="btn btn-primary mt-3 mx-1 my-1" onClick={handleLOWClick}>Convert To Lower Case</button>
  <button disabled={text.length===0} className="btn btn-primary mt-3 mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
  <button disabled={text.length===0} className="btn btn-primary mt-3 mx-1 my-1" onClick={handleCopy}>Copy Text</button>
  <button disabled={text.length===0} className="btn btn-primary mt-3 mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
</div>
<div className="container" style={{color:props.mode ==='dark'?'white':'black'}}>
  <h1>Your text summary</h1>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
 <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</p>
 <h2>Preview</h2>
 <p>{text.length>0?text:"Nothing to preview!"}</p>
</div>
    </>
  )
}
