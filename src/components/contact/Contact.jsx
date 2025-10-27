import React from "react";
import "./Contact.css";
import kartalar from "./kartalar.jpg"
import kredit from "./kredit.jpg"
import bank from "./bank.jpg"

const Contact = () => {


  return (
    <div className="contact">
      <img className="name" src={kartalar} alt="" />
      <h2 className="kre">Kreditlar</h2>
      <img src={kredit} alt="" />
      <h1 className="mik">Mikraloyiha</h1>
      <img src={bank} alt="" />
    </div>
    
  
     
  ); 
};

export default Contact;
