import React, { useState } from "react";
import { BsSunFill } from "react-icons/bs";

function Light() {
  const [inputlightbgcolor, setinputlightbgcolor] = useState("");
  const [inputlightheadingcolor, setinputlightheadingcolor] = useState("");
  const [inputlighttextcolor, setinputlighttextcolor] = useState("");

  const [lightbgcolor, setlightbgcolor] = useState("");
  const [lightheadingcolor, setlightheadingcolor] = useState("");
  const [lighttextcolor, setlighttextcolor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setlightbgcolor(inputlightbgcolor);
    setlightheadingcolor(inputlightheadingcolor);
    setlighttextcolor(inputlighttextcolor);

    setinputlightbgcolor("");
    setinputlightheadingcolor("");
    setinputlighttextcolor("");
  };

  return (
    <div className="light main" style={{ backgroundColor: lightbgcolor }}>
      <h1 style={{ color: lightheadingcolor }}>
        Light Mode <BsSunFill />
      </h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="formElement">
          <label className="label">Enter Light Background Color: </label>
          <input
            className="input"
            type="text"
            value={inputlightbgcolor}
            onChange={(e) => setinputlightbgcolor(e.target.value)}
          />
        </div>
        <div className="formElement">
          <label className="label">Enter Light Heading Color: </label>
          <input
            className="input"
            type="text"
            value={inputlightheadingcolor}
            onChange={(e) => setinputlightheadingcolor(e.target.value)}
          />
        </div>
        <div className="formElement">
          <label className="label">Enter Light Text Color: </label>
          <input
            className="input"
            type="text"
            value={inputlighttextcolor}
            onChange={(e) => setinputlighttextcolor(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">submit</button>
      </form>
      <p style={{ color: lighttextcolor }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, id sit
        deleniti laudantium corrupti officia suscipit. Pariatur iusto et
        voluptates perferendis aliquam sapiente, animi in perspiciatis, dolorem,
        aliquid optio. Maxime ipsum dolore, quasi dolores corrupti dolorem,
        officia tenetur nisi consequuntur labore fuga doloribus hic autem optio
        soluta voluptatibus itaque! Dolore!
      </p>
      <p style={{ color: lighttextcolor }}>
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

export default Light;
