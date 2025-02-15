import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlerts("Converted to Uppercase", "success");
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlerts("Converted to Lowercase", "success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlerts("Text is cleared", "success");
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlerts("Text is copied to clipboard", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
        props.showAlerts("Text is changed", "success");
    }
    const [text, setText] = useState('');

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
        <textarea 
          className="form-control" 
          value={text} 
          onChange={handleOnChange} 
          style={{
            backgroundColor: props.mode==='dark'?'#13466e':'white', 
            color: props.mode==='dark'?'white':'#042743'
          }}
          id="myBox" 
          rows="8"
        ></textarea>
      </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>

    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
