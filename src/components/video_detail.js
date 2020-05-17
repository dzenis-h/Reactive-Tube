import React from "react";

import parser from "../helpers/charDecoder";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div className="loading-video"></div>;
  }

  // const {videoId} = video.id.videoId;
  const {
    snippet: { description, channelTitle, title },
    id: { videoId },
  } = video;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} title={url} />
      </div>
      <div className="details">
        <div className="details-title">{parser(title)}</div>
        <div className="details-channel-title">{parser(channelTitle)}</div>
        <div>{parser(description)}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
