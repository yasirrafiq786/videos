import React from 'react';
import VideoList from './VideoList';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyAvzMOE3FB9w2AyzcVqjiWz8k63YWWZxmY';

class App extends React.Component {
  state = {videos: []};

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

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
