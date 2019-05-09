import React from "react";
import "./Card.css";
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
  return (
    <div className="post-output">
    <div className="post-placement">
    <div className="banner-img">
      <CardBanner />

        <div className="post-caption" />
        <CardContent />

      </div>
    </div>

    </div>


  );
};

// CardContainer.addEventListener('click', event())

export default CardContainer;
