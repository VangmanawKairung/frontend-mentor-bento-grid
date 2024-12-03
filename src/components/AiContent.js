import React from "react";
import aiContentChat from "../assets/illustration-ai-content.webp";

const AiContent = () => {
  return (
    <section className="card" id="ai-content">
      <h2>Write your content using AI.</h2>
      <img src={aiContentChat} alt="AI assist content chat info" />
    </section>
  );
};

export default AiContent;
