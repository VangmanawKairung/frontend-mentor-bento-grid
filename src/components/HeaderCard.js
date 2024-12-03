import React from "react";
import starsIcon from "../assets/illustration-five-stars.webp";

function HeaderCard() {
  return (
    <section className="card" id="header-card">
      <h1>
        Social Media <span>10x</span> <em>Faster</em> with AI
      </h1>
      <img src={starsIcon} alt="Five stars rating info"></img>
      <p>Over 4,000 5-star reviews</p>
    </section>
  );
}

export default HeaderCard;
