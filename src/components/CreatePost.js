import React from "react";
import createPost from "../assets/illustration-create-post.webp";

const CreatePost = () => {
  return (
    <section className="card" id="create-post">
      <h2>
        Create and schedule content <span>quicker.</span>
      </h2>
      <img src={createPost} alt="Create post button info" />
    </section>
  );
};

export default CreatePost;
