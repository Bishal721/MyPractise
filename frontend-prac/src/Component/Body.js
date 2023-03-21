import React,{useState} from "react";

export default function Body(props) {
  const [Text,setText]=useState('Enter the text');
  const clicked=()=>{
    let changing=Text.toUpperCase();
    setText(changing);
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  return (
    
    <>
      <div className="container">
        <label htmlFor="fname"><h1>{props.Tag}</h1></label>
        <textarea id="fname" name="fname" onChange={handleOnChange} value={Text} rows="20" cols="110"></textarea>
        <button className="btn" onClick={clicked}>Convert to uppercase</button>
      </div>
    </>
  );
}
