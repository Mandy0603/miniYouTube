import React from "react";
import VideoItem from "./VideoItem";
import "./VideoItem.css";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem onVideoSelect={onVideoSelect} key={video.etag} video={video} />
    );
  });
  return <div>{renderedList}</div>;
};

export default VideoList;
