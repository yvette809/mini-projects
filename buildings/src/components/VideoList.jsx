import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  return videos.map((video) => {
    return (
      <div className="ui relaxed divid list">
        <VideoItem
          key={video.id.videoId}
          onVideoSelect={onVideoSelect}
          video={video}
        />
        ;
      </div>
    );
  });
};

export default VideoList;
