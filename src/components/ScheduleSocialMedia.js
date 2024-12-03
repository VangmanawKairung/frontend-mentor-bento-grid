import React from "react";
import scheduleSocialMedia from "../assets/illustration-schedule-posts.webp";

const ScheduleSocialMedia = () => {
  return (
    <section className="card" id="schedule-social-media">
      <h2>Schedule to social media.</h2>
      <img src={scheduleSocialMedia} alt="Social media scheduling info" />
      <p>
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </section>
  );
};

export default ScheduleSocialMedia;
