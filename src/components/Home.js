import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome to React arcade games!</h1>
      <div>
        <Link to="snap">🌟Snap🌟</Link>
      </div>
    </>
  );
};

export default Home;
