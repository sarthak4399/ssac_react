import React from "react";
import "./Exams.css";

const Card = ({name,date,link,image}) => {
  return (
    <div className="e-card">
          <img src={image}></img>
          <div>
            <h2>{name}</h2>
            <p>{date}</p>
            <p>Website: {link}</p>
          </div>
        </div>
  )
};

export default Card;
