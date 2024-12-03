import React from "react";
import audienceGrowth from "../assets/illustration-audience-growth.webp";

const AudienceGrowth = () => {
  return (
    <section className="card" id="audience-growth">
      <h2>
        <span>&gt;</span>56%
      </h2>
      <p>faster audience growth</p>
      <img src={audienceGrowth} alt="Audience avatars info" />
    </section>
  );
};

export default AudienceGrowth;
