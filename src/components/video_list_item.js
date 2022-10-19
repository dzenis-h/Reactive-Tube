import React from "react";

import parser from "../helpers/charDecoder";
import dateFormatter from "../model/date";

import { Wrapper } from "../darkMode/Wrapper";

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const { title, channelTitle, publishedAt } = video.snippet;

  return (
    <Wrapper>
      <li
        onClick={() => onVideoSelect(video)}
        className="list-group-item list-item-custom"
      >
        <div className="video-list media">
          <div className="media-body">
            <div className="media-heading">{parser(title)}</div>
            <div className="media-heading-channel-title">
              {parser(channelTitle)}
            </div>
            <div className="media-heading-channel-date">
              {dateFormatter(publishedAt)}
            </div>
          </div>
          <div className="media-right">
            <img className="media-object" src={imageUrl} alt={title} />
          </div>
        </div>
      </li>
    </Wrapper>
  );
};

export default VideoListItem;
