import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        alt="coding"
        className="home-image"
      />

      <div className="home-text">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I am a Full Stack Developer building modern web applications
          using React and Node.js.
        </p>
      </div>
    </div>
  );
}

export default Home;
