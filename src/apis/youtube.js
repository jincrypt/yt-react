import axios from 'axios';


const KEY = 'AIzaSyBB8A9KnB5Ejop8-d3reGxB3TF67C9f56Q';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});