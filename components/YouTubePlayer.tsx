// components/YouTubePlayer.tsx
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

type YouTubePlayerProps = {
  videoId: string;
};

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      mute: 1, // ミュートに設定
      // 必要に応じて他のパラメータを追加
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubePlayer;
