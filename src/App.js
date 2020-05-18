import React, { useState, useEffect, Fragment } from "react";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import { API_KEY } from "./config/api_key";
import "./css/style.css";

const App = (props) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Use this as a default
  useEffect(() => {
    const defaultInput = "David Goggins - NO MORE LAZINESS";
    videoSearch(defaultInput);
  }, []);

  const videoSearch = (term) => {
    YTSearch({ key: API_KEY, term }, (videos) => {
      setVideos(videos);
      setSelectedVideo(videos[0]);
    });
  };

  const search = (term) => {
    videoSearch(term);
  };

  return (
    <Fragment>
      <SearchBar onSearchTermChange={search} />
      <VideoDetail video={selectedVideo} />
      <VideoList
        onVideoSelect={(selectedVideo) => setSelectedVideo(selectedVideo)}
        videos={videos}
      />
    </Fragment>
  );
};

export default App;
