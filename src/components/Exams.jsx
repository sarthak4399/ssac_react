import React from "react";
import "./Exams.css";
import Card from "./Card";
const countries = [
  {
    name: "Country 1",

    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kdbAe7rgxjrkP9P2irwn3QHaE_%26pid%3DApi&f=1&ipt=f22b4c69a8c14698a76bfdad33c70df92705b0bf0d41effb8513eeaec79f2d80&ipo=images",
    Exams: " Tofel ",
    region: "Region 1"
  },  {
    name: "Country 1",

    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kdbAe7rgxjrkP9P2irwn3QHaE_%26pid%3DApi&f=1&ipt=f22b4c69a8c14698a76bfdad33c70df92705b0bf0d41effb8513eeaec79f2d80&ipo=images",
    Exams: " Tofel ",
    region: "Region 1"
  },  {
    name: "Country 1",

    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kdbAe7rgxjrkP9P2irwn3QHaE_%26pid%3DApi&f=1&ipt=f22b4c69a8c14698a76bfdad33c70df92705b0bf0d41effb8513eeaec79f2d80&ipo=images",
    Exams: " Tofel ",
    region: "Region 1"
  },  {
    name: "Country 1",

    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kdbAe7rgxjrkP9P2irwn3QHaE_%26pid%3DApi&f=1&ipt=f22b4c69a8c14698a76bfdad33c70df92705b0bf0d41effb8513eeaec79f2d80&ipo=images",
    Exams: " Tofel ",
    region: "Region 1"
  },  {
    name: "Country 1",

    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kdbAe7rgxjrkP9P2irwn3QHaE_%26pid%3DApi&f=1&ipt=f22b4c69a8c14698a76bfdad33c70df92705b0bf0d41effb8513eeaec79f2d80&ipo=images",
    Exams: " Tofel ",
    region: "Region 1"
  },  {
    name: "Country 1",

    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kdbAe7rgxjrkP9P2irwn3QHaE_%26pid%3DApi&f=1&ipt=f22b4c69a8c14698a76bfdad33c70df92705b0bf0d41effb8513eeaec79f2d80&ipo=images",
    Exams: " Tofel ",
    region: "Region 1"
  },  {
    name: "Country 1",

    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kdbAe7rgxjrkP9P2irwn3QHaE_%26pid%3DApi&f=1&ipt=f22b4c69a8c14698a76bfdad33c70df92705b0bf0d41effb8513eeaec79f2d80&ipo=images",
    Exams: " Tofel ",
    region: "Region 1"
  },  {
    name: "Country 1",

    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kdbAe7rgxjrkP9P2irwn3QHaE_%26pid%3DApi&f=1&ipt=f22b4c69a8c14698a76bfdad33c70df92705b0bf0d41effb8513eeaec79f2d80&ipo=images",
    Exams: " Tofel ",
    region: "Region 1"
  },
];
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
        
      <div className="c-country-list">
      {countries.map((country, index) => (
        <Card key={index} country={country} />
      ))}
    </div>
      </div>
    </div>
  );
};
