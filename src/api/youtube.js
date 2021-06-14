import axios from 'axios';

const KEY = 'AIzaSyCp_dChCVR5wgeybJqArUso31G2I9rrrQY';

export default axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
