import React from "react";
import "./Card.css";
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
  return (
    <div className="card-container">
    <a href="https://react.js.org" className="card-link" target="_blank" rel="noopener noreferrer">
    <div className="post-output">
    <div className="post-placement">
    <div className="banner-img">
      <CardBanner />

        <div className="post-caption" />
        <CardContent />

        </div>

      </div>
    </div>

    </a>
    </div>


  );
};

export default CardContainer;
