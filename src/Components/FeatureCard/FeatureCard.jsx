import React from "react";
import "./FeatureCard.css";

function FeatureCard({ feature, description, image }) {
  return (
    <div className="featureCard">
      <div className="featureimage">
        <img src={image} alt="" />
      </div>
      <div className="title">{feature}</div>
      <div className="description">{description}</div>
    </div>
  );
}

export default FeatureCard;
