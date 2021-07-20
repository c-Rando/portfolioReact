import React, { useState } from 'react';
import "./index.css";

function ContactInfo(props) {
  const [error, setError] = useState('');

  const validate = (e) => {
    const val = e.target.value;
    const name = e.target.getAttribute('name');
  
    if (!val) {
      setError(`Field '${name}' is required`);
    } else {
      setError('');
    }

    if (name === 'email') {
      if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)) {
        setError('');
      } else {
        setError('Email is invalid')
      }
    }
  }

  return (
    <div>
      <h1>Contact Info field {props.name}</h1>
      <br/>
      <input type="text" placeholder="Enter name" name="name" onBlur={(e) => validate(e)} />
      <br/>
      <input type="text" placeholder="Enter email" name="email" onBlur={(e) => validate(e)} />
      <br/>
      <input type="text" placeholder="Enter message" name="message" onBlur={(e) => validate(e)} />
      <br/>
      <p className="error">{error}</p>
      <br/>
      <button>Submit</button>
    </div>
  );
};

export default ContactInfo;