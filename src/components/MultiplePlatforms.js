import React from "react";
import platforms from "../assets/illustration-multiple-platforms.webp";

const MultiplePlatforms = () => {
  return (
    <section className="card" id="multiple-platforms-card">
      <img src={platforms} alt="Multiple accounts and platforms info" />
      <h2>Manage multiple accounts and platforms.</h2>
    </section>
  );
};

export default MultiplePlatforms;
