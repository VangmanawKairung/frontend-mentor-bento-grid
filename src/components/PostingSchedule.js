import React from "react";
import postingSchedule from "../assets/illustration-consistent-schedule.webp";

const PostingSchedule = () => {
  return (
    <section className="card" id="posting-schedule">
      <h2>Maintain a consistent posting schedule.</h2>
      <img src={postingSchedule} alt="Posting schedule info" />
    </section>
  );
};

export default PostingSchedule;
