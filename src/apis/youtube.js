import axios from 'axios';

const KEY = 'AIzaSyAvzMOE3FB9w2AyzcVqjiWz8k63YWWZxmY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '5',
    key: KEY,
  },
});
