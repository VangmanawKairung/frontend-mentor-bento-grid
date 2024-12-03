import React from "react";
import followerGrowth from "../assets/illustration-grow-followers.webp";

const FollowerGrowth = () => {
  return (
    <section className="card" id="follower-growth">
      <img src={followerGrowth} alt="Growth follower number and chart info" />
      <h2>Grow followers with non-stop content.</h2>
    </section>
  );
};

export default FollowerGrowth;
