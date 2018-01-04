import _ from "lodash";
import ReacDOM from "react-dom";
import React, { Component } from "react";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

import YTSearch from "youtube-api-search";

const API_KEY = "AIzaSyBuQGaeyGjuEXySwtuLY8d6EKpUpfPrpGQ";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch("katy perry");
  }
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 500);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReacDOM.render(<App />, document.querySelector(".container"));
