"use client";
import React from "react";
import YouTubePlayer from "../components/YouTubePlayer";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>YouTubeライブストリーミングの再生</h1>
      <YouTubePlayer videoId="4xDzrJKXOOY" />
    </div>
  );
};

export default HomePage;
