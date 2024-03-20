import React, { useState } from "react";
import axios from "axios";
function Contact() {
const[input,setInput]=useState({
name:'',
email:'',
message:''
})

function handlechange(event){
  const {name,value}=event.target;
  setInput(prevInput=>{
    return{
      ...prevInput,
      [name]:value
    }
  })

}
function handleclick(event) {
event.preventDefault();
const newUser={
  name:input.name,
  email:input.email,
  message:input.message
}
console.log(newUser);

axios.post("http://localhost:4000/data",newUser)
}
  
  return (
    <>
      <section>
        <div className="contact">
          <div className="contact-main">
            <h1>CONTACT US</h1>
            <div className="contact-form">
              <div className="contact-left">
                <input
                  onChange={handlechange}
                  type="text"
                  className="name"
                  placeholder="NAME"
                  name="name"
                  value={input.name}
                  required
                />
                <input
                  onChange={handlechange}
                  type="email"
                  className="name"
                  placeholder="Email"
                  name="email"
                  value={input.email}
                  required
                />
                <textarea
                  onChange={handlechange}
                  className="input-text"
                  rows="10"
                  placeholder="MESSAGE"
                  name="message"
                  value={input.message}
                  required
                ></textarea>
                <button
                  onClick={handleclick}
                  className="submit-button"
                  id="submit"
                  type="submit"
                >
                SEND
                </button>
              </div>
              <div className="contact-right">
                <ul className="contact-list">
                  <li className="list-item">
                    <i className="fa fa-map-marker fa-2x"></i>
                    <span>City, State</span>
                  </li>
                  <li className="list-item">
                    <i className="fa fa-map-marker fa-2x"></i>
                    <span>City, State</span>
                  </li>
                  <li className="list-item">
                    <i className="fa fa-map-marker fa-2x"></i>
                    <span>City, State</span>
                  </li>
                  <li className="list-item">
                    <i className="fa fa-map-marker fa-2x"></i>
                    <span>City, State</span>
                  </li>
                </ul>
                <ul className="social-list">
                  <li>
                    <a href="#" className="contact-icon">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="contact-icon">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="contact-icon">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="contact-icon">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="contact-icon">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
