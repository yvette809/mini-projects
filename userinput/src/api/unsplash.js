import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID JDGZW1pxz3VX_SggyuYkCFkG5-exFDiSXQF8Cl-1oP0",
  },
});
