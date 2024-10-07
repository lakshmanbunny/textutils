import React from 'react';
import { useState } from 'react';

export default function TextArea(props) {
    const handleUpClick = () => {
        console.log("handleUpClick fired");
        setText(text.toUpperCase());
        // Corrected alert type from 'succes' to 'success'
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLowClick = () => {
        console.log("handleLowClick fired");
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase", "success"); // Optional: Add an alert for this action
    }

    const handleClearClick = () => {
        console.log("handleClearClick fired");
        setText('');
        props.showAlert("Text cleared", "success"); // Optional: Add an alert for this action
    }

    const handleOnChange = (event) => {
        console.log("handleOnChange fired");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container">
                <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h1>
                <div className="container my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>

                <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                    <h2>Your Text Summary</h2>
                    <b>{text.split(" ").length} words and {text.length} characters {text.split("\n").length} lines</b><br />
                    <b>{text.split(" ").length * 0.008} minutes to read</b>
                </div>
                <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                    <h2>Preview</h2>
                    <b>{text.length > 0 ? text : 'Enter something to preview it here'}</b>
                </div>
            </div>
        </>
    );
}
