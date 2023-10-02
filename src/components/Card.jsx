import React, { useState } from "react";
import "../css/card.css";

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} className="c-card-image" />;
};

const Card = ({ country, universities }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const renderUniversities = () => {
    if (!universities || universities.length === 0) {
      return <p>No universities found.</p>;
    }

    return universities.map((university, index) => (
      <div key={index} className="c-university">
        <img src={university.image} alt={university.name} className="c-university-image" />
        <div>
          <h3>{university.name}</h3>
          <p>Location: {university.location}</p>
          <p>Established: {university.established}</p>
        </div>
      </div>
    ));
  };


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
