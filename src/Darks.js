import React, { useState } from "react";
import { FaCloudMoon } from "react-icons/fa";

function Darks() {
  const [inputdarkbgcolor, setinputdarkbgcolor] = useState("");
  const [inputdarkheadingcolor, setinputdarkheadingcolor] = useState("");
  const [inputdarktextcolor, setinputdarktextcolor] = useState("");

  const [darkbgcolor, setdarkbgcolor] = useState("");
  const [darkheadingcolor, setdarkheadingcolor] = useState("");
  const [darktextcolor, setdarktextcolor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setdarkbgcolor(inputdarkbgcolor);
    setdarkheadingcolor(inputdarkheadingcolor);
    setdarktextcolor(inputdarktextcolor);
    
    setinputdarkbgcolor('');
    setinputdarkheadingcolor('');
    setinputdarktextcolor('');
  };

  return (
    <div className="dark main" style={{ backgroundColor: darkbgcolor }}>
      <h1 style={{ color: darkheadingcolor }}>
        Dark Mode <FaCloudMoon />
      </h1>
      <form onSubmit={handleSubmit} className='form-container'>
      <div className="formElement">
      <label className="label">Enter Dark Background Color:  </label>
        <input
          className="input"
          type="text"
          value={inputdarkbgcolor}
          onChange={(e) => setinputdarkbgcolor(e.target.value)}
        />
      </div>
        <div className="formElement">
        <label className="label">Enter Dark Heading Color:  </label>
        <input
          className="input"
          type="text"
          value={inputdarkheadingcolor}
          onChange={(e) => setinputdarkheadingcolor(e.target.value)}
        />
        </div>
        <div className="formElement">
        <label className="label">Enter Dark Text Color:  </label>
        <input
          className="input"
          type="text"
          value={inputdarktextcolor}
          onChange={(e) => setinputdarktextcolor(e.target.value)}
        />
        </div> 
      <button type="submit" className="btn">submit</button>
      </form>
      <p style={{ color: darktextcolor }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, id sit
        deleniti laudantium corrupti officia suscipit. Pariatur iusto et
        voluptates perferendis aliquam sapiente, animi in perspiciatis, dolorem,
        aliquid optio. Maxime ipsum dolore, quasi dolores corrupti dolorem,
        officia tenetur nisi consequuntur labore fuga doloribus hic autem optio
        soluta voluptatibus itaque! Dolore!
      </p>
      <p style={{ color: darktextcolor }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, id sit
        deleniti laudantium corrupti officia suscipit. Pariatur iusto et
        voluptates perferendis aliquam sapiente, animi in perspiciatis, dolorem,
        aliquid optio. Maxime ipsum dolore, quasi dolores corrupti dolorem,
        officia tenetur nisi consequuntur labore fuga doloribus hic autem optio
        soluta voluptatibus itaque! Dolore!
      </p>
    </div>
  );
}

export default Darks;
