import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="cardIC">
      <div className="containerIC">
        <h4 className="h4class"><b>UPCOMING EVENT In Patna</b></h4>
        <p className="pclass">Patna, June 1st!</p>
         <a href="https://forms.gle/crm464Lt4PYA33sr6" className="btn" target="_blank" rel="noopener noreferrer">
  Register Now
</a>
      </div>
    </div>
  );
};
export default Card;
