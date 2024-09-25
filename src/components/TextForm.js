import React,{useState} from "react";



export default function TextForm(props) {
    const handleOnChange = (event)=>{
       
           setText(event.target.value);
           
       }
    const handleUPclick = ()=>{
 
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    };
    const handleLWclick = ()=>{
        
          let newText = text.toLowerCase();
          setText(newText)
          props.showAlert("Converted to lowercase!", "success")
      };
    const handleClearText = ()=>{
        
          let newText = "";
          setText(newText)
          props.showAlert("Cleard all text!", "success")
      };
      const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        props.showAlert("Copied all text!", "success")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied text to clipboard!", "success")
      };
      const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces!", "success")
      };

 

    const [text, setText] = useState("");

  return (
    <>
    <div className="container my-4" style={{color: props.mode === 'dark' || props.mode === 'primary' || props.mode === 'success' || props.mode === 'warning' ? 'white' : 'black',
        }}>
        <h1>{props.heading}</h1>
        <div className="my-3">
            <textarea className="form-control" placeholder="Enter your text...." style={{backgroundColor: props.mode === 'dark' 
                ? '#6c757d' 
                : props.mode === 'primary' 
                ? 'rgb(21 95 203)' 
                : props.mode === 'success' 
                ? '#198754' 
                : props.mode === 'warning' 
                ? '#ad840b' 
                : 'rgb(232 226 226)',color: props.mode === 'dark' || props.mode === 'primary' || props.mode === 'success' || props.mode === 'warning' ? 'white' : 'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className={`btn btn-${props.mode ==='light'? 'primary' : props.mode} mx-2 my-1`} onClick={handleUPclick}>Convert To Uppercase</button>
        <button className={`btn btn-${props.mode ==='light'? 'primary' : props.mode} mx-2 my-1`} onClick={handleLWclick}>Convert To Lowercase</button>
        <button className={`btn btn-${props.mode ==='light'? 'primary' : props.mode} mx-2 my-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className={`btn btn-${props.mode ==='light'? 'primary' : props.mode} mx-2 my-1`} onClick={handleCopy}>Copy Text</button>
        <button className={`btn btn-${props.mode ==='light'? 'primary' : props.mode} mx-2 my-1`} onClick={handleClearText}>Clear Text</button>
        
        
        
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' || props.mode === 'primary' || props.mode === 'success' || props.mode === 'warning' ? 'white' : 'black',paddingBottom: '70px' 
}}>
        <h2>Your text summary</h2>
        <p>{text.trim().split(/\s+/).filter(Boolean).length} Words and {text.replace(/(\r\n|\n|\r)/gm, "").length} Characters</p>
        <p>{text.trim() === "" ? "0" :0.008*text.split(" ").filter(word => word.trim() !== "").length} Minutes to read this</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter text to preview...'}</p>
    </div>
    </>
  );
}
