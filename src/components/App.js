import React from 'react';
import VideoList from './VideoList';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyAvzMOE3FB9w2AyzcVqjiWz8k63YWWZxmY';

class App extends React.Component {
  state = {videos: [], selectedVideo: null};

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        maxResults: '5',
        key: KEY,
      },
    });

    this.setState({videos: response.data.items});
  };

onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
}


  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect = {this.onVideoSelect} videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
