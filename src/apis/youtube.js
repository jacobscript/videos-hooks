import axios from 'axios'

const KEY = 'AIzaSyC1X8ERCYKLrUBlgjzOF1QJo4HcbteMAto'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
})
