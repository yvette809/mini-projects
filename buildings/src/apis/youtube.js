import axios from "axios";

const KEY = "AIzaSyBJwoSdEe_4JikbOnF0kYuAXfAa5PSUEAk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
