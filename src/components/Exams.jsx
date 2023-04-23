import React from "react";
import "./Exams.css";
import Card from "./Card";

export const Exams = () => {
  return (
    <div className="exams-section">
      <div className="e-top">
        <div className="e-left">
          <p>Important</p>
        <h1>Exams</h1>
        </div>
        <div className="e-right">
          <button> &lt; </button>
          <button> &gt; </button>
        </div>
      </div>
      <div className="e-bottom">
        
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};
