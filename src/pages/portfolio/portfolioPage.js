import React from "react";
import "./portfolio.css";

function Portfolio(props) {
  return (
    <div className="portfolio">
      <h2>Latest Work</h2>
     
      <div className="images" style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>

      <img src='/images/IMAGE1.png'  alt="#!"></img>
      <img src={props.img}   alt="#!"></img>
      <img src='/images/IMAGE1.png'  alt="#!"></img>
      <img src={props.img}   alt="#!"></img>
      <img src='/images/IMAGE1.png'  alt="#!"></img>
      <img src={props.img}  alt="#!"></img>
      </div>
    </div>
  );
}

export default Portfolio;
